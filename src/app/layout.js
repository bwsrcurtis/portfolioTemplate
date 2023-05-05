import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Nunito_Sans({ weight: ['variable'], subsets: ['latin'] });

export const metadata = {
  title: 'Beachside Design',
  description: 'Static Sites For Your Small Business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
