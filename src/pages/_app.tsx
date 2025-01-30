import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import ThemeProvider from './provider';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>Fabrice Mukunzi</title>
        <meta
          name="description"
          content="Experienced Fullstack developer based in Kigali,Rwanda
I thrive on turning ideas into impactful solutions.
With a keen eye for detail and a dedication to excellence"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}
