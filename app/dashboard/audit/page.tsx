import React from 'react';
import { ShieldAlert, BookX } from 'lucide-react';
import { supabaseAdmin } from '@/app/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AuditLogsPage() {

    let failedLogs: any[] = [];
    let errorState = false;

    try {
        if (process.env.SUPABASE_URL && !process.env.SUPABASE_URL.includes('mock')) {
            // Fetch latest 20 failed verifications
            const { data, error } = await supabaseAdmin
                .from('failed_verifications')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(20);

            if (data) {
                failedLogs = data;
            } else {
                errorState = true;
            }
        } else {
            // Mock data for UI presentation
            failedLogs = [
                {
                    id: 'log-uuid-1',
                    report_date: new Date().toISOString().split('T')[0],
                    error_type: 'NUMERIC_MISMATCH',
                    conflict_data: { "wsj": "CPI at 3.1%", "ft": "CPI at 3.2%" },
                    sources_involved: ["wsj.com", "ft.com"],
                    created_at: new Date().toISOString()
                },
                {
                    id: 'log-uuid-2',
                    report_date: '2026-03-03',
                    error_type: 'SINGLE_SOURCE',
                    conflict_data: { claim: "Bank of Japan (BOJ) considering immediate rate hikes" },
                    sources_involved: ["bloomberg.com"],
                    created_at: '2026-03-03T09:00:03Z'
                }
            ];
        }
    } catch (err) {
        errorState = true;
    }

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto mb-24 md:mb-20 animate-in fade-in zoom-in duration-500">
            <header className="mb-6 md:mb-10">
                <div className="inline-flex items-center space-x-3 bg-red-950/40 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold border border-rose-900 mb-6">
                    <ShieldAlert size={16} />
                    <span>RESTRICTED ZONE | Red Team Operations Log</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Audit Logs & Integrity Verification Trails</h1>
                <p className="text-neutral-400 mt-2 max-w-2xl text-sm md:text-base">
                    A comprehensive and transparent ledger of all failed data verification attempts. When conflicting reports manifest among Tier-1 media sources, the intelligence engine forcibly aborts report generation and logs the violations here.
                </p>
            </header>

            {errorState && (
                <div className="text-amber-500 p-4 bg-amber-950/30 rounded border border-amber-900 my-4 text-sm font-medium flex items-center space-x-2">
                    <BookX size={18} />
                    <span>Unable to connect to the database cluster. Presenting Demo (Mock) security logs.</span>
                </div>
            )}

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden mt-8">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 text-xs uppercase tracking-wider">
                                <th className="p-5 font-semibold">Timestamp UTC / Target Date</th>
                                <th className="p-5 font-semibold">Violation Type</th>
                                <th className="p-5 font-semibold">Conflicting Data Captured</th>
                                <th className="p-5 font-semibold">Sources Tracked</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {failedLogs.map((log, idx) => (
                                <tr key={log.id} className="hover:bg-neutral-900/40 transition-colors group">
                                    <td className="p-5">
                                        <div className="text-sm font-medium text-neutral-200">{new Date(log.created_at).toLocaleString('en-US')}</div>
                                        <div className="text-xs text-neutral-600 mt-1 uppercase">Target Date: {log.report_date}</div>
                                    </td>
                                    <td className="p-5">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-red-950 text-rose-400 border border-red-900/50">
                                            {log.error_type}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex flex-col gap-2">
                                            {Object.entries(log.conflict_data).map(([key, value]) => (
                                                <div key={key} className="bg-neutral-900 border border-neutral-800 p-2.5 rounded flex items-start space-x-2 text-sm">
                                                    <span className="text-rose-500/80 font-bold uppercase tracking-wider text-xs mt-0.5 min-w-[50px]">[{key}]</span>
                                                    <span className="text-neutral-300 font-medium leading-relaxed">{String(value)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex flex-wrap gap-2">
                                            {log.sources_involved?.map((src: string) => (
                                                <span key={src} className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs">
                                                    {src}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {failedLogs.length === 0 && (
                    <div className="p-10 text-center text-neutral-500 flex flex-col items-center">
                        <ShieldAlert className="mb-4 text-neutral-700" size={32} />
                        <p>No verification failures recorded in the current timeframe.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
