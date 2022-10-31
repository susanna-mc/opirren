import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Projects() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <p>
          {' '}
          <strong>PROJECTS </strong>
        </p>
      </main>
      <footer />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
