import 'bootstrap/dist/css/bootstrap.css';
import { css, Global } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Global
        styles={css`
          body {
            background-color: #d8f3fa;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;

            a {
              text-decoration: none;
            }
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
