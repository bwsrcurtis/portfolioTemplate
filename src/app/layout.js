'use client';

import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import matter from 'gray-matter';
import { createContext, useContext } from 'react';

export const metadata = {
  title: 'Portfolio Template',
  description: 'Portfolio Site Template',
};

const inter = Montserrat({ weight: ['variable'], subsets: ['latin'] });

const Context = createContext();


export default async function RootLayout({ children }) {

  const content = await import('../../content/pages/home.md');
  const local = matter(content.default);
  const data = local.data;

  return (
    <html lang="en">
      <Context.Provider value={data}>
        <body
          className={inter.className + 'bg-background text-text dark:bg-darkBackground dark:text-darkText'}>
          <Header />
          {children}
          <Footer />
        </body>
      </Context.Provider>
    </html>
  );
}

export function useAppContext() {
  return useContext(Context);
}
