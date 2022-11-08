import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Mission() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Mission: Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navigation />

      <div
        style={{
          backgroundImage: `url(/imgs/roundedcorner.png)`,
          backgroundRepeat: 'no-repeat',

          backgroundAttachment: 'fixed',
          backgroundPosition: 'left bottom',
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="column col-7" />
            <div className="column col-5">
              <h2>{t('mission:mission_statement_heading')}</h2>
              <h3>{t('mission:mission_statement_domestic')}</h3>
              <p>{t('mission:mission_statement_domestic_subheading')}</p>
              <h3>{t('mission:mission_statement_international')}</h3>
              <p>{t('mission:mission_statement_international_subheading')}</p>
              <h2>{t('mission:values_statement_heading')}</h2>
              <p id="values">{t('mission:values_statement_subheading')} </p>
              <ul>
                <li>{t('mission:values_democracy')}</li>
                <li>{t('mission:values_expression')}</li>
                <li>{t('mission:values_secularism')}</li>
                <li>{t('mission:values_territory')}</li>
                <li>{t('mission:values_pluralism')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}
