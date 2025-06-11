import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} p-4 md:p-6`} style={{ backgroundColor: '#f0d09a', color: '#333' }}>
        {children}
      </body>
    </html>
  );
}
