import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { TRPCReactProvider } from '@/trpc/client';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Multitenant Ecommerce',
  description: 'Multitenant Ecommerce Application with Next.js and Payload CMS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
