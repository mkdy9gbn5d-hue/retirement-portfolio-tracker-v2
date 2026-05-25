import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Retirement Portfolio Tracker',
  description: 'Eric Schrader — $5M Goal Tracker',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white font-sans">{children}</body>
    </html>
  );
}
