'use client';
import './globals.css';
import './fonts.css';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Header from '@/components/organisms/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
