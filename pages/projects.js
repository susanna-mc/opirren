import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const DisplayOver = styled.div({
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '100%',
  zIndex: 2,
  transition: 'background-color 350ms ease',
  backgroundColor: 'transparent',
  padding: '20px 20px 0 20px',
  boxSizing: 'border-box',
});

const BigTitle = styled.h2({
  textTransform: 'uppercase',

  position: 'absolute',
  bottom: '60px',
});

const Hover = styled.div({
  opacity: 0,
  transition: 'opacity 350ms ease',
});

const Paragraph = styled.p({
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease',
  position: 'absolute',
  bottom: '5px',
  textAlign: 'center',
  textShadow: '2px 2px 6px #303030',
});

const styleda = styled.a({
  color: '#fff',
});

const Heroimage = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '100%',
  height: '350px',
  cursor: 'pointer',
  backgroundImage: 'url(/imgs/bluemosaic.svg)',
  textShadow: '2px 2px 6px #303030',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  [` :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

export default function Projects() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <div>
          <Heroimage>
            <DisplayOver>
              <BigTitle>{t('projects:title')}</BigTitle>
              <Hover>
                <Paragraph>{t('projects:title_subheading')}</Paragraph>
              </Hover>
            </DisplayOver>
          </Heroimage>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Link href="/projects">
                    <a className="card-link">
                      <img
                        src="/imgs/protestmanualpreview.png"
                        alt="PLACEHOLDER"
                        className="card-img-top"
                      />
                      <h2> {t('index:protest_safely')}</h2>
                      <p> {t('index:protest_safely_subheading')}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Link href="/projects">
                    <a>
                      <img
                        src="/imgs/treatbleedingpreview.png"
                        alt="PLACEHOLDER"
                        className="card-img-top"
                      />
                      <h2>{t('index:social_media_assets')}</h2>
                      <p>{t('index:social_media_assets_subheading')}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ccol-lg-4 col-sm-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Link href="/projects">
                    <a>
                      <h2>{t('index:treat_wounds')} </h2>
                      <p>{t('index:treat_wounds_subheading')}</p>
                    </a>
                  </Link>
                </div>
              </div>
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
      ...(await serverSideTranslations(locale, [
        'common',
        'index',
        'projects',
      ])),
    },
  };
}
