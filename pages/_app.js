import { css, Global } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #d8f3fa;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
