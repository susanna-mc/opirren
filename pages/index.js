import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const projectSection = css`
  display: flex;

  flex-direction: row;
`;
const projectBoxes = css`
  width: 33%;
  flex-direction: column;
`;

const infoSection = css`
  display: flex;
  background-color: #2c8bac;
  flex-direction: row;
`;

const infoBoxes = css`
  margin: 20px
  flex-direction: column;
`;

export default function Home() {
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

        <img
          src="/hero-image.jpeg"
          alt="Two Iraian young women without hijabs standing back to back with arms outstretched, dangling navy blue hijabs from their hands with trees in the background "
          className="img-fluid"
        />

        <h1> {t('index:title')} </h1>

        <p> {t('index:recent_pubs')} </p>
        <div css={projectSection}>
          <div className="container" css={projectBoxes}>
            <a>
              <h2> {t('index:protest_safely')}</h2>
              <p> {t('index:protest_safely_subheading')}</p>
            </a>
          </div>

          <div className="container" css={projectBoxes}>
            <a>
              <h2>{t('index:social_media_assets')}</h2>
              <p>{t('index:social_media_assets_subheading')}</p>
            </a>
          </div>
          <div className="container" css={projectBoxes}>
            <a>
              <h2>{t('index:treat_wounds')} </h2>
              <p>{t('index:treat_wounds_subheading')}</p>
            </a>
          </div>
        </div>
        <br />
        <div css={infoSection}>
          <div className="container pt-5 mt-5 mb-5 card">
            <div className="card-body">
              <Link href="/mission">
                <a>
                  <img
                    src="/missionImage.png"
                    alt="Artwork by Istanbul based artist Hemad Javadzade.
                    Painting features an Iranian woman wearing a white shirt and blue pants wrestling a brown hairy demon that wears black boots. With one arm she pulls back the jaw of the demon, the other arm is raised and grasping scissors. One foot is stomping on the demon's baton, to keep the weapon out of his reach. Her black hair is not covered by a hijab and swirls around her body in a shape that resembles the borders of Iran. She looks angry and determined as the demon snarls with it's tongue out."
                    className="card-img-top"
                    height="300px"
                  />
                  <h3 className="card-title">{t('index:mission')}</h3>
                  <p className="card-text"> {t('index:mission_subheading')}</p>
                </a>
              </Link>
            </div>
          </div>

          <div className="container pt-5 mt-5 mb-5 card" css={infoBoxes}>
            <div className="card-body">
              <Link href="/projects">
                <a>
                  <img
                    src="/futureImage.png"
                    alt="PLACEHOLDER"
                    className="card-img-top"
                    height="300px"
                  />
                  <h3 className="card-title">{t('index:future_projects')}</h3>
                  <p className="card-text">
                    {' '}
                    {t('index:future_projects_subheading')}
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="container pt-5 mt-5 mb-5 card" css={infoBoxes}>
            <div className=" card-body">
              <Link href="/mission#values">
                <a>
                  <img
                    src="/valuesImage.png"
                    alt="Four women chatting pleasantly at a table in Iran. Two are wearing conservative black chadors, two are without hijab."
                    className="card-img-top"
                    height="300px"
                  />
                  {/* <div className="card-img-overlay"> */}
                  <h3 className="card-title">{t('index:values')}</h3>
                  <p className="card-text"> {t('index:values_subheading')}</p>
                  {/* </div> */}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
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
