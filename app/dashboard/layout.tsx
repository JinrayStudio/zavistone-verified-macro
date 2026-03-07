import React from 'react';
import Link from 'next/link';
import { AreaChart, AlertTriangle, ShieldCheck, LogOut, Settings, Instagram, Youtube, Twitter, UserPlus } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col md:flex-row pb-16 md:pb-0">
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-neutral-800 bg-neutral-900/50 backdrop-blur-xl flex-col justify-between hidden md:flex">
                <div>
                    <div className="p-6 border-b border-neutral-800">
                        <h1 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                            ZAVISTONE.
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">Verified Terminal</p>
                    </div>
                    <nav className="p-4 space-y-2">
                        <a href="/dashboard" className="flex items-center space-x-3 text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/50 p-3 rounded-lg transition-all text-sm font-medium">
                            <AreaChart size={18} />
                            <span>Daily Intelligence</span>
                        </a>
                        <a href="/dashboard/audit" className="flex items-center space-x-3 text-neutral-400 hover:text-rose-400 hover:bg-neutral-800/50 p-3 rounded-lg transition-all text-sm font-medium">
                            <AlertTriangle size={18} />
                            <span>Red Team Audit Logs</span>
                        </a>
                        <a href="/dashboard/pro" className="flex items-center space-x-3 text-amber-500 bg-amber-950/20 hover:text-amber-400 hover:bg-amber-950/40 border border-amber-900/30 p-3 rounded-lg transition-all text-sm font-bold shadow-sm">
                            <ShieldCheck size={18} />
                            <span>Access Control (Pro)</span>
                        </a>
                    </nav>
                </div>
                <div className="p-4 border-t border-neutral-800 flex flex-col gap-4">
                    {/* SNS Subscriptions */}
                    <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-4 shadow-xl relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/30 transition-colors"></div>
                        <div className="flex items-center gap-2 mb-2 relative z-10">
                            <UserPlus size={14} className="text-blue-400" />
                            <span className="text-xs font-bold text-neutral-200 uppercase tracking-widest">Connect & Follow</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 mb-3 leading-relaxed relative z-10">
                            Subscribe to our official channels for real-time macro alerts and exclusive content.
                        </p>
                        <div className="grid grid-cols-1 gap-2 relative z-10">
                            <a href="https://instagram.com/zavistone" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-rose-500/50 hover:bg-rose-950/30 text-neutral-400 hover:text-rose-400 transition-all group/sns">
                                <div className="flex items-center space-x-3">
                                    <Instagram size={18} />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-wider uppercase text-neutral-300">@Zavistone</span>
                                        <span className="text-[9px] font-medium tracking-widest uppercase text-neutral-500">IG/Threads</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-rose-500 bg-rose-950/50 px-2 py-0.5 rounded border border-rose-900/50">ACTIVE</span>
                            </a>

                            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-600 transition-all group/sns cursor-not-allowed">
                                <div className="flex items-center space-x-3">
                                    <Youtube size={18} opacity={0.5} />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-wider uppercase text-neutral-500">YouTube</span>
                                        <span className="text-[9px] font-medium tracking-widest uppercase text-neutral-600">Pending</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-neutral-600 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800/50">SOON</span>
                            </a>

                            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-600 transition-all group/sns cursor-not-allowed">
                                <div className="flex items-center space-x-3">
                                    <Twitter size={18} opacity={0.5} />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-wider uppercase text-neutral-500">X (Twitter)</span>
                                        <span className="text-[9px] font-medium tracking-widest uppercase text-neutral-600">Pending</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-neutral-600 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800/50">SOON</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 text-neutral-400 hover:text-rose-500 cursor-pointer p-3 rounded-lg hover:bg-rose-950/20 transition-all text-sm font-medium border border-transparent hover:border-rose-900/30">
                        <LogOut size={18} />
                        <span>Terminate Secure Session</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-neutral-300 truncate">SECURE LINK ESTABLISHED</span>
                    </div>
                    <div className="text-xs text-neutral-500 font-mono tracking-widest hidden sm:block">
                        ZAVISTONE-NODE-01 | UTC
                    </div>
                    {/* Mobile Only: Top Right ZAVISTONE */}
                    <div className="text-xs font-bold tracking-tighter bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent md:hidden">
                        ZAVISTONE.
                    </div>
                </header>

                <main className="flex-1 overflow-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-20">
                    {children}
                </main>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 border-t border-neutral-800 bg-neutral-900/95 backdrop-blur-xl z-50 md:hidden flex items-center justify-around p-3 pb-safe">
                <a href="/dashboard" className="flex flex-col items-center p-2 text-neutral-400 hover:text-emerald-400 transition-colors">
                    <AreaChart size={20} className="mb-1" />
                    <span className="text-[10px] font-medium">Daily</span>
                </a>
                <a href="/dashboard/audit" className="flex flex-col items-center p-2 text-neutral-400 hover:text-rose-400 transition-colors">
                    <AlertTriangle size={20} className="mb-1" />
                    <span className="text-[10px] font-medium">Audit</span>
                </a>
                <a href="/dashboard/pro" className="flex flex-col items-center p-2 text-amber-500 hover:text-amber-400 transition-colors">
                    <ShieldCheck size={20} className="mb-1" />
                    <span className="text-[10px] font-medium shadow-sm">Pro Access</span>
                </a>
            </nav>
        </div>
    );
}
