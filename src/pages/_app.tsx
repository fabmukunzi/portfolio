import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import ThemeProvider from './provider';
import Head from 'next/head';
import {GoogleAnalytics} from "@next/third-parties/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>Fabrice Mukunzi</title>
        <meta
          name="description"
          content="Full-Stack Software Engineer with 3+ years of experience building and shipping production applications end-to-end, from requirements to deployment, in an international teams. Solid expertise in TypeScript, Java, and React within modern full-stack stacks, and a proven agile partner collaborating closely with Engineering, QA, and Product teams, committed to continuous learning and improvement."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-R8HG0TSW99" />
      </NextUIProvider>
    </ThemeProvider>
  );
}
