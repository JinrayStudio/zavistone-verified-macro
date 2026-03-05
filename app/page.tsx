export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    ZAVISTONE Macro Intelligence Engine
                </h1>
                <p className="text-center text-neutral-400 mb-8 tracking-widest uppercase text-xs">
                    Verified Edition
                </p>

                <div className="flex justify-center border border-neutral-800 bg-neutral-950 rounded-lg p-10 shadow-2xl">
                    <div className="text-center space-y-6">
                        <h2 className="text-xl font-semibold">Security Authentication Required</h2>
                        <p className="text-neutral-500 max-w-md mx-auto text-sm">
                            Access to ZAVISTONE verified macro reports is strictly controlled. Only approved Meta (Instagram/Threads) followers are granted access.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors w-full mt-4">
                            Login with Meta
                        </button>
                        <div className="text-xs text-neutral-600 mt-6 pt-4 border-t border-neutral-800">
                            Legal Disclaimer: This information is provided for informational purposes only and does not constitute financial advice.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
