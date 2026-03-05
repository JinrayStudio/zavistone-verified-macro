import { NextResponse } from 'next/server';
import { fetchMacroNews } from '@/app/lib/tavily';
import { verifyFactsWithLLM } from '@/app/lib/llm';
import { supabaseAdmin } from '@/app/lib/supabase';

export async function GET(request: Request) {
    // 1. Cron Secret Verification (Security)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        // For local testing without cron header
        if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    const reportDate = new Date().toISOString().split('T')[0];

    try {
        // ==============================================
        // ZAVISTONE Macro Intelligence Engine (Verified)
        // Core Pipeline Execution
        // ==============================================

        console.log('[Scheduler] Started Macro Engine Trigger at', new Date().toISOString());

        // Step 1: Data Acquisition Layer
        console.log('[Data Acquisition] Fetching tier-1 sources via Search API...');
        const rawArticles = await fetchMacroNews("Federal reserve interest rates macro economy");

        if (!rawArticles || rawArticles.length === 0) {
            throw new Error('Data Acquisition failed to retrieve articles.');
        }

        // Step 2, 3, 4: Fact Verification, Integrity Guard, Scenario & Reliability modeling
        console.log('[Fact Verification Engine] Cross-checking numerical data...');
        const verifiedDataResult = await verifyFactsWithLLM(rawArticles);

        // If verification failed explicitly
        if (verifiedDataResult.status !== 'SUCCESS') {
            throw new Error('Cross-Verification Failed: Discrepancies found.');
        }

        // Step 5: Archive & Report
        console.log('[Archive Layer] Saving to database...');

        // Simulate hashing for immutable verification (simplified)
        const vHash = Buffer.from(JSON.stringify(verifiedDataResult)).toString('base64');

        // Attempt saving to Supabase
        try {
            if (process.env.SUPABASE_URL && !process.env.SUPABASE_URL.includes('mock')) {
                await supabaseAdmin.from('daily_reports').insert({
                    report_date: reportDate,
                    status: 'SUCCESS',
                    confirmed_facts: verifiedDataResult.confirmed_facts,
                    verified_numerical_data: verifiedDataResult.verified_numerical_data,
                    inference_layer: verifiedDataResult.inference_layer,
                    speculative_scenario: verifiedDataResult.speculative_scenario,
                    base_scenario: verifiedDataResult.base_scenario,
                    bull_scenario: verifiedDataResult.bull_scenario,
                    bear_scenario: verifiedDataResult.bear_scenario,
                    reliability_index: verifiedDataResult.reliability_index,
                    red_team_audit: verifiedDataResult.red_team_audit,
                    verification_hash: vHash
                });
            }
        } catch (dbErr) {
            console.warn("DB insertion bypassed (No valid schema or URL available):", dbErr);
        }

        return NextResponse.json({
            status: 'SUCCESS',
            message: 'ZAVISTONE Macro Intelligence Engine execution completed.',
            report_date: reportDate,
            data: verifiedDataResult,
            timestamp: new Date().toISOString()
        }, { status: 200 });

    } catch (error) {
        console.error('[Engine Error] Execution aborted:', error);

        // Log failure in failed_verifications table (simulate)
        if (process.env.SUPABASE_URL && !process.env.SUPABASE_URL.includes('mock')) {
            // [Fix] Update report status to aborted FIRST to satisfy Foreign Key Constraint
            await supabaseAdmin.from('daily_reports').upsert({
                report_date: reportDate,
                status: 'ABORTED'
            });

            // Then insert into failed_verifications
            await supabaseAdmin.from('failed_verifications').insert({
                report_date: reportDate,
                error_type: 'NUMERIC_MISMATCH',
                conflict_data: { rawError: error instanceof Error ? error.message : "Unknown" },
                sources_involved: {}
            });
        }

        // Terminate report automatically. Return Data Not Sufficient.
        return NextResponse.json({
            status: 'ABORTED',
            message: 'Data Not Sufficient for Confirmation',
            error: error instanceof Error ? error.message : 'Unknown Error'
        }, { status: 503 });
    }
}
