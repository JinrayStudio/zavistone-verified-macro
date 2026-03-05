import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ZAVISTONE Macro Intelligence Engine',
    description: 'Verified Edition - Institutional Macro Reporting Dashboard',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-neutral-900 text-neutral-50 mb-10`}>
                {children}
            </body>
        </html>
    );
}
