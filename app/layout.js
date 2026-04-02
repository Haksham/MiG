"use client";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import Header from './components/Header';
import Home from './page';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CanvaLinks from './components/CanvaLinks';
import Footer from './components/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// export const metadata = {
//   title: "Portfolio",
//   description: "A portfolio showcasing my work and skills",
// };

export default function RootLayout() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'canva':
        return <CanvaLinks />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <html lang="en">
      <body className={`${roboto.className} p-4 md:p-6`} style={{ backgroundColor: '#f0d09a', color: '#333' }}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </body>
    </html>
  );
}
