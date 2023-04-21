'use client';
import './globals.css';
import './fonts.css';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { Header } from '@/components/Header/Header';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html>
      <head />
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {!pathname?.includes('login') && <Header />}
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
