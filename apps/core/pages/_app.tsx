import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Will always work, even when changing theme options
// import { Navbar } from '../components/Navbar';

// Will randomly break or always when changing theme options
import { Navbar } from '@api-gateway/ui';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  header: {
    bgColor: 'tomato',
  }
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to core!</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar/>
        <div className="app">
          <header className="flex">
            <NxLogo width="75" height="50" />
            <h1>Welcome to core!</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
