import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Quiz</title>
        <meta name="title" content="Alura Quiz" />
        <meta name="description" content="Desafie seus conhecimentos com o Alura Quiz" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alura Quiz" />
        <meta property="og:description" content="Desafie seus conhecimentos com o Alura Quiz" />
        <meta property="og:image" content="https://wallpaperaccess.com/full/494420.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Alura Quiz" />
        <meta property="twitter:description" content="Desafie seus conhecimentos com o Alura Quiz" />
        <meta property="twitter:image" content="https://wallpaperaccess.com/full/494420.jpg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
