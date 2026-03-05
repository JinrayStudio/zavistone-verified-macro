import React from 'react';
import { ShieldCheck, Key, BellRing, Activity, Lock, Fingerprint, Database, TerminalSquare, AlertTriangle } from 'lucide-react';

export default function ProAccessPage() {
    return (
        <div className="p-8 max-w-[1400px] mx-auto mb-20 animate-in fade-in duration-700">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-800">
                <div>
                    <div className="text-amber-500 bg-amber-950/40 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 border border-amber-900/50 shadow-sm">
                        <Lock size={12} />
                        INSTITUTIONAL HUB (VIP PRO ACTIVE)
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">Private Institutional Portal</h1>
                    <p className="text-neutral-500 uppercase text-xs tracking-[0.2em]">Blackstone-Tier Security & Institutional Data Hub</p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                    <div className="flex flex-col items-end">
                        <span className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-1">Latest Security Audit</span>
                        <div className="text-xl font-mono font-light text-neutral-300 flex items-center gap-2">
                            <Fingerprint size={16} className="text-amber-500" />
                            {new Date().toISOString().split('T')[1].substring(0, 8)} UTC
                        </div>
                    </div>
                </div>
            </header>

            {/* Warning Banner */}
            <div className="bg-amber-950/10 border-l-4 border-amber-500 p-6 mb-10 rounded-r-xl shadow-lg border-y border-r border-y-amber-900/10 border-r-amber-900/10">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-amber-400 font-bold mb-1">Zero Trust Secure Connection Active</h3>
                        <p className="text-amber-200/60 text-sm leading-relaxed">
                            This page is strictly reserved for top-tier institutional investors and approved asset managers. All API fetch requests, parameter modification logs, and search data trails are permanently archived in an SEC-compliant encrypted compliance log pack.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* 1. API Key Management */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-900/50 transition-colors shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-3 bg-blue-950/30 border border-blue-900/50 rounded-xl">
                            <Key size={24} className="text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg uppercase tracking-wide">Flawless Data API Bridge</h2>
                            <p className="text-neutral-500 text-xs tracking-wider">Institutional Data Feed API</p>
                        </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                        Issues extraction keys for ZAVISTONE's deep-verified macro source data (JSON Format), directly connected and utilized by top-tier quant funds like Blackstone for their proprietary trading algorithms.
                    </p>
                    <div className="space-y-4">
                        <div className="bg-black border border-neutral-800 rounded-lg p-4 flex items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest block">Main Production Key</span>
                                <span className="font-mono text-neutral-300 text-sm">sk_live_zvi_********************8f92</span>
                            </div>
                            <button className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded shadow border border-neutral-700 transition-colors">Regenerate</button>
                        </div>
                        <div className="flex justify-between items-center text-xs px-2">
                            <span className="text-neutral-500">Monthly API Call Quota: <strong className="text-neutral-300">142,500 / 500,000</strong> (Call/mo)</span>
                            <span className="text-emerald-400">Healthy</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full w-[28.5%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        </div>
                    </div>
                </div>

                {/* 2. Custom Alerts & Parameters */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-900/50 transition-colors shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-xl">
                            <BellRing size={24} className="text-emerald-500" />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg uppercase tracking-wide">Custom Portfolio Parameter Alerts</h2>
                            <p className="text-neutral-500 text-xs tracking-wider">Custom Parameter Alerts & Webhooks</p>
                        </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                        Dispatches hyper-precise, real-time alerts via webhooks (Slack, Teams) tailored to the specific risk appetite of institutional clients (fund managers/corporate executives).
                    </p>
                    <div className="space-y-3">
                        <div className="bg-black border border-neutral-800 rounded-lg p-3.5 flex items-center justify-between group-hover:border-emerald-900/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                <span className="text-sm text-neutral-300 font-medium">Emergency Meeting Alert on WTI Crude Exceeding $95</span>
                            </div>
                            <span className="text-[10px] text-neutral-500 font-mono">Slack Webhook</span>
                        </div>
                        <div className="bg-black border border-neutral-800 rounded-lg p-3.5 flex items-center justify-between group-hover:border-emerald-900/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                <span className="text-sm text-neutral-300 font-medium">Nikkei 225 Plunge Exceeding 3%</span>
                            </div>
                            <span className="text-[10px] text-neutral-500 font-mono">SMS / Email</span>
                        </div>
                        <button className="w-full mt-2 py-3 border border-dashed border-neutral-700 hover:border-emerald-500 hover:text-emerald-400 text-neutral-500 text-xs font-bold rounded-lg transition-colors uppercase tracking-widest">
                            + Add New Alert Parameter Rule
                        </button>
                    </div>
                </div>

                {/* 3. Authentication & Access Logs */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 relative overflow-hidden xl:col-span-2 shadow-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-neutral-800/50 pb-6">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="p-3 bg-rose-950/30 border border-rose-900/50 rounded-xl">
                                <ShieldCheck size={24} className="text-rose-500" />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-lg uppercase tracking-wide">Compliance Security & Session Audit Logs</h2>
                                <p className="text-neutral-500 text-xs tracking-wider">Compliance Logging & Security Audits</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-bold rounded-lg transition-colors">
                                <Database size={14} />
                                CSV Download (Audit Export)
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead>
                                <tr className="text-[10px] text-neutral-500 uppercase tracking-widest border-b border-neutral-800">
                                    <th className="pb-4 font-bold">Timestamp UTC</th>
                                    <th className="pb-4 font-bold">Actor</th>
                                    <th className="pb-4 font-bold">Action</th>
                                    <th className="pb-4 font-bold">Origin</th>
                                    <th className="pb-4 font-bold text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-neutral-300 font-light divide-y divide-neutral-800/50">
                                <tr className="hover:bg-neutral-900/30 transition-colors">
                                    <td className="py-4 font-mono text-xs">2026-03-04 14:48:21</td>
                                    <td className="py-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center font-bold text-[10px]">SV</div>
                                        System (Cron)
                                    </td>
                                    <td className="py-4 text-emerald-400">Fetch Dashboard Intelligence Data</td>
                                    <td className="py-4 font-mono text-xs text-neutral-500">Internal VPC (-.—.—.—)</td>
                                    <td className="py-4 text-right"><span className="px-2 py-1 bg-emerald-950/50 text-emerald-500 text-[10px] font-bold rounded border border-emerald-900/30">SUCCESS</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-900/30 transition-colors">
                                    <td className="py-4 font-mono text-xs">2026-03-04 13:12:05</td>
                                    <td className="py-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-purple-900 text-purple-300 flex items-center justify-center font-bold text-[10px]">A1</div>
                                        API Key (Ending: 8f92)
                                    </td>
                                    <td className="py-4">Retrieve Master Playbook Array</td>
                                    <td className="py-4 font-mono text-xs text-neutral-500">104.28.192.41 (New York, US)</td>
                                    <td className="py-4 text-right"><span className="px-2 py-1 bg-emerald-950/50 text-emerald-500 text-[10px] font-bold rounded border border-emerald-900/30">SUCCESS</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-900/30 transition-colors">
                                    <td className="py-4 font-mono text-xs">2026-03-04 09:30:11</td>
                                    <td className="py-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-rose-900 text-rose-300 flex items-center justify-center font-bold text-[10px]">XR</div>
                                        Unknown Crawler
                                    </td>
                                    <td className="py-4 text-neutral-400 line-through">Attempt Unauthorized Scrape</td>
                                    <td className="py-4 font-mono text-xs text-neutral-500">185.112.42.99 (Moscow, RU)</td>
                                    <td className="py-4 text-right"><span className="px-2 py-1 bg-rose-950/50 text-rose-500 text-[10px] font-bold rounded border border-rose-900/30">BLOCKED (RATE LIMIT)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
