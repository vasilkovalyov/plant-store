import type { Metadata } from 'next';

import { CssBaseline } from '@mui/material';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Plant store - dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <CssBaseline /> */}
        <div id="wrapper">
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
