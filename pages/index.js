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

const infoSection = css`
  background-color: #2c8bac;
  padding: 20px 20px;
  a {
    color: #fff;
  }

  a:hover {
    color: #f6b91c;
    transition: 350ms ease;
  }
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
        <section className="mt-5">
          <div
            className="p-5 text-center bg-image "
            style={{
              backgroundImage: 'url(/imgs/blueheroimage.svg)',
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
                    {t('index:title')}
                  </MDBTypography>

                  <MDBTypography className="display-6 mb-3 fs-2 fst-italic fw-lighter">
                    {t('index:title_subheading')}
                  </MDBTypography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <h3> {t('index:recent_pubs')} </h3> */}
        <section className="m-5" css={projectSection}>
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

        <section className="mt-5" css={infoSection}>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-lg-4 col-sm-6 mt-4 mb-4">
                <div className="bg-image rounded-6 hover-shadow">
                  <img src="/imgs/missionImage.png" className="w-100 " alt="" />

                  <div
                    className="mask"
                    style={{
                      background: 'linear-gradient(to top, black, #0000)',
                    }}
                  >
                    <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center ">
                      <div className="mb-3">
                        <Link href="/mission#mission">
                          <a className=" stretched-link">
                            <h1
                              className="fw-normal mb-2 "
                              style={{ fontSize: '3vw' }}
                            >
                              {t('index:mission')}
                            </h1>
                            <h4
                              className="  mb-4 fw-lighter"
                              style={{ fontSize: '2vw' }}
                            >
                              {t('index:mission_subheading')}
                            </h4>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol className="col-lg-4 col-sm-6 mt-4 mb-4">
                <div className="bg-image rounded-6 hover-shadow">
                  <img src="/imgs/futureImage.png" className="w-100" alt="" />

                  <div
                    className="mask"
                    style={{
                      background: 'linear-gradient(to top, black, #0000)',
                    }}
                  >
                    <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center">
                      <div className="mb-3">
                        <Link href="/projects">
                          <a className=" stretched-link">
                            <h1
                              className="fw-normal  mb-2"
                              style={{ fontSize: '3vw' }}
                            >
                              {t('index:future_projects')}
                            </h1>
                            <h4
                              className="  mb-4 fw-lighter"
                              style={{ fontSize: '2vw' }}
                            >
                              {t('index:future_projects_subheading')}
                            </h4>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol className="col-lg-4 col-sm-6 mt-4 mb-4">
                <div className="bg-image rounded-6 hover-shadow">
                  <img src="/imgs/valuesImage.png" className="w-100" alt="" />

                  <div
                    className="mask"
                    style={{
                      background: 'linear-gradient(to top, black, #0000)',
                    }}
                  >
                    <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center">
                      <div className="mb-3">
                        <Link href="/mission#values">
                          <a className=" stretched-link">
                            <h1
                              className="fw-normal  mb-2"
                              style={{ fontSize: '3vw' }}
                            >
                              {t('index:values')}
                            </h1>
                            <h4
                              className="  mb-4 fw-lighter"
                              style={{ fontSize: '2vw' }}
                            >
                              {t('index:values_subheading')}
                            </h4>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
}
