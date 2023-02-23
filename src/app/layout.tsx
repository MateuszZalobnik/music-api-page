'use client';
import './globals.css';
import './fonts.css';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { Header } from '@/components/Header/Header';
import { usePathname } from 'next/navigation';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html>
      <head/>
      <body>
        <ThemeProvider theme={theme}>
          {!(pathname?.includes('login')) && <Header />}
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
