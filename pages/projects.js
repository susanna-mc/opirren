import { css } from '@emotion/react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const projectSection = css`
  a {
    color: #505050;
  }

  a:hover {
    color: #2c8bac;
    transition: 350ms ease;
  }
`;

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
        <header>
          <div
            className="p-5 mt-5 text-center bg-image "
            style={{
              backgroundImage: 'url(/imgs/bluemosaic.svg)',
              height: '600px',
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <MDBTypography tag="div" className="display-3 pb-3 mb-3 ">
                    {t('projects:title')}
                  </MDBTypography>

                  <MDBTypography className=" display-6 mb-3 fs-2 fst-italic fw-lighter">
                    {t('projects:title_subheading')}
                  </MDBTypography>
                </div>
              </div>
            </div>
          </div>
        </header>

        <br />
        <section css={projectSection}>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <Link href=" https://bit.ly/3T1xaic">
                    <a target="_blank">
                      <div className="bg-image hover-zoom">
                        <img
                          src="/imgs/protestdisplaysquare.svg"
                          className="w-100"
                          alt="PLACEHOLDER"
                        />
                      </div>

                      <MDBCardBody>
                        <MDBCardText>
                          <h4> {t('index:protest_safely')}</h4>
                          <p> {t('index:protest_safely_subheading')}</p>
                        </MDBCardText>
                      </MDBCardBody>
                    </a>
                  </Link>
                </MDBCard>
              </MDBCol>
              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <Link href="https://drive.google.com/drive/folders/1ktEu_SQK-KBShEkkRiG-Lzaj1PA-3JIM?usp=sharing">
                    <a target="_blank">
                      <div className="bg-image hover-zoom">
                        <img
                          src="/imgs/distributivematerials.svg"
                          className="w-100"
                          alt="PLACEHOLDER"
                        />
                      </div>
                      <MDBCardBody>
                        <MDBCardText>
                          <h4> {t('index:social_media_assets')}</h4>
                          <p> {t('index:social_media_assets_subheading')}</p>
                        </MDBCardText>
                      </MDBCardBody>
                    </a>
                  </Link>
                </MDBCard>
              </MDBCol>
              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <Link href="https://bit.ly/3CwowBf">
                    <a target="_blank">
                      <div className="bg-image hover-zoom">
                        <img
                          src="/imgs/bleedingdisplaysquare.svg"
                          className="w-100"
                          alt="PLACEHOLDER"
                        />
                      </div>
                      <MDBCardBody>
                        <MDBCardText>
                          <h4> {t('index:treat_wounds')}</h4>
                          <p> {t('index:treat_wounds_subheading')}</p>
                        </MDBCardText>
                      </MDBCardBody>
                    </a>
                  </Link>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBRow className="g-0 bg-light position-relative">
            <MDBCol md="6" className="mb-md-0 p-md-4">
              <div className="bg-image hover-zoom">
                <img
                  src="/imgs/futureprojects.jpg"
                  className="w-100"
                  alt="..."
                />
              </div>
            </MDBCol>
            <MDBCol md="6" className="p-4 ps-md-0">
              <h1 className="mt-0">{t('projects:future_projects')}</h1>
              <p>{t('projects:future_projects_subheading')}</p>
            </MDBCol>
          </MDBRow>
        </section>
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
