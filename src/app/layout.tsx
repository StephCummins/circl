import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import '../styles/globals.css';
import MuiThemeProvider from '../components/MuiThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'circl',
  description: 'connection on purpose'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
