import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Operation Iranian Renaissance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />

        <h1> {t('index:title')} </h1>

        <p> {t('index:recent_pubs')} </p>

        <div>
          <a>
            <h2> {t('index:protest_safely')}</h2>
            <p> {t('index:protest_safely_subheading')}</p>
          </a>

          <a>
            <h2>{t('index:social_media_assets')}</h2>
            <p>{t('index:social_media_assets_subheading')}</p>
          </a>

          <a>
            <h2>{t('index:treat_wounds')} </h2>
            <p>{t('index:treat_wounds_subheading')}</p>
          </a>
          <br />
          <a>
            <h3>{t('index:mission')}</h3>
            <p> {t('index:mission_subheading')}</p>
          </a>
          <a>
            <h3>{t('index:values')}</h3>
            <p> {t('index:values_subheading')}</p>
          </a>
          <a>
            <h3>{t('index:future_projects')}</h3>
            <p> {t('index:future_projects_subheading')}</p>
          </a>
        </div>
      </main>

      <footer> Follow OpIrRen on IG Tel Tw</footer>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
}
