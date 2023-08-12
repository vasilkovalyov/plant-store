'use client';
import type { Metadata } from 'next';

import { ThemeProvider } from '@mui/material/styles';

import Header from '@/layouts/Header/header';
import Footer from '@/layouts/Footer/footer';

import lightTheme from '../theme/lightTheme';
import { CssBaseline } from '@mui/material';
import './styles/main.scss';

export const metadata: Metadata = {
  title: 'Plant Store',
  description: 'Plant Store - description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <div id="wrapper">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
