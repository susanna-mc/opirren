import { css } from '@emotion/react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
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
              backgroundImage: 'url(/imgs/hero-image.jpeg)',
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

                  <MDBTypography className="display-6 mb-3 fs-2  fw-lighter">
                    {t('index:title_subheading')}
                  </MDBTypography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <h3> {t('index:recent_pubs')} </h3> */}
        <section className="m-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="/downloads/protestsafely.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/protestdisplaysquare.svg"
                        className="w-100"
                        alt="Preview of 'How to Protest Safely' Persian-language manual."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>{t('index:protest_safely')}</MDBCardTitle>
                    <MDBCardText>
                      {t('index:protest_safely_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="/downloads/protestsafely.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_pdf')} <i className="fas fa-download" />
                  </a>
                </MDBCard>
              </MDBCol>

              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="https://drive.google.com/drive/folders/1ktEu_SQK-KBShEkkRiG-Lzaj1PA-3JIM?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/distributivematerials.svg"
                        className="w-100"
                        alt="Preview of pre-made social media posts for easy distribution of Operation Iranian Renaissance Persian-language manuals."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>
                      {t('index:social_media_assets')}
                    </MDBCardTitle>
                    <MDBCardText>
                      {t('index:social_media_assets_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="https://drive.google.com/drive/folders/1ktEu_SQK-KBShEkkRiG-Lzaj1PA-3JIM?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_img')} <i className="fas fa-images" />
                  </a>
                </MDBCard>
              </MDBCol>

              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="/downloads/treatbleeding.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/bleedingdisplaysquare.svg"
                        className="w-100"
                        alt="Preview of 'How to Treat Bleeding and Gunshot Wounds' Persian-language manual."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>{t('index:treat_wounds')}</MDBCardTitle>
                    <MDBCardText>
                      {t('index:treat_wounds_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="/downloads/treatbleeding.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_pdf')} <i className="fas fa-download" />
                  </a>
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
                  <img
                    src="/imgs/missionImage.png"
                    className="w-100 "
                    alt="Artwork by Istanbul-based artist Hemad Javadzade. The painting features an Iranian woman wearing a white shirt and blue pants wrestling a brown hairy demon that wears black boots. With one arm, she pulls back the demon's jaw; the other arm is raised, grasping scissors, ready to strike. One foot is stomping on the demon's baton to keep the weapon out of his reach. Her black hair is not covered by a hijab and swirls around her body in a shape that roughly resembles the borders of Iran. She looks angry and determined as the demon snarls with its tongue out."
                  />

                  <div
                    className="mask"
                    style={{
                      background: 'linear-gradient(to top, black, #0000)',
                    }}
                  >
                    <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center ">
                      <div className="mb-3">
                        <Link href="/mission#mission">
                          <a className="stretched-link">
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
                  <img
                    src="/imgs/futureImage.png"
                    className="w-100"
                    alt="Photograph from 2022 Mahsa Amini Uprising; numerous university students gather for an on-campus protest. In the foreground, a woman wearing a black chador, glasses, and a mask stands with her back toward the camera. She is tying the brown hair of the unveiled woman in front of her into a braid."
                  />

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
                  <img
                    src="/imgs/valuesImage.png"
                    className="w-100"
                    alt="Photograph from 2022 Mahsa Amini Uprising; four women chat pleasantly at a table in Iran. Two are wearing conservative black chadors; two are without hijab."
                  />

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
}
