'use client';

import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Portfolio Template',
  description: 'Portfolio Site Template',
};

const inter = Montserrat({ weight: ['variable'], subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'bg-background text-text dark:bg-darkBackground dark:text-darkText'}>
        {children}
      </body>
    </html>
  );
}

