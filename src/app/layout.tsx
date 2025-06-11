// src/app/layout.tsx
import './globals.css'; // if you're using Tailwind or global styles
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BFM Academy',
  description: 'Your site description here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
  className={`${inter.className} bg-repeat bg-[length:40px_40px]`} // adjusts grid size
  style={{ backgroundImage: "url('/grid.png')" }}
>
  {children}
</body>
    </html>
  );
}
