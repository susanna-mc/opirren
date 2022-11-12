import { css } from '@emotion/react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardLink,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';
import Navigation from '../components/Navigation';

const projectSection = css`
  a {
    color: #505050;
  }

  a:hover {
    color: #2c8bac;
  }
`;

// const infoBoxes = css`
//   margin: auto;

//   flex-direction: column;
//   a {
//     color: #fff;
//   }
//   a:hover {
//     color: #f6b91c;
//   }

// const infoSection = css`
//   display: flex;
//   background-color: #2c8bac;
//   flex-direction: row;
//   padding: 20px 20px;
// `;

const infoSection = css`
  background-color: #2c8bac;

  a {
    color: #fff;
  }

  a:hover {
    color: #f6b91c;
    transition: 350ms ease;
  }
`;

export default function Test() {
  const { t } = useTranslation('');

  return (
    <div>
      <Navigation />
      <header>
        <div
          className="p-5 text-center bg-image "
          style={{
            backgroundImage: 'url(/imgs/blueheroimage.svg)',
            height: '650px',
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

                <MDBTypography tag="small" className=" display-6 mb-3">
                  {t('index:title_subheading')}
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
                <Link href="/projects">
                  <a>
                    <div className="bg-image hover-zoom">
                      <img
                        src="/imgs/protestdisplaysquare.svg"
                        className="w-100"
                        alt="PLACEHOLDER"
                      />
                    </div>

                    <MDBCardBody>
                      <MDBCardText>
                        <h2> {t('index:protest_safely')}</h2>
                        <p> {t('index:protest_safely_subheading')}</p>
                      </MDBCardText>
                    </MDBCardBody>
                  </a>
                </Link>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-4 col-sm-6 mb-4">
              <MDBCard className="h-100">
                <Link href="/projects">
                  <a>
                    <div className="bg-image hover-zoom">
                      <img
                        src="/imgs/distributivematerials.svg"
                        className="w-100"
                        alt="PLACEHOLDER"
                      />
                    </div>
                    <MDBCardBody>
                      <MDBCardText>
                        <h2> {t('index:social_media_assets')}</h2>
                        <p> {t('index:social_media_assets_subheading')}</p>
                      </MDBCardText>
                    </MDBCardBody>
                  </a>
                </Link>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-4 col-sm-6 mb-4">
              <MDBCard className="h-100">
                <Link href="/projects">
                  <a>
                    <div className="bg-image hover-zoom">
                      <img
                        src="/imgs/bleedingdisplaysquare.svg"
                        className="w-100"
                        alt="PLACEHOLDER"
                      />
                    </div>
                    <MDBCardBody>
                      <MDBCardText>
                        <h2> {t('index:treat_wounds')}</h2>
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
              <div className="bg-image rounded-6">
                <img src="/imgs/missionImage.png" className="w-100" alt="" />

                <div
                  className="mask"
                  style={{
                    background: 'linear-gradient(to top, black, #0000)',
                  }}
                >
                  <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center ">
                    <div className="mb-3">
                      <a className=" stretched-link" href="/mission#mission">
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
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol className="col-lg-4 col-sm-6 mt-4 mb-4">
              <div className="bg-image rounded-6">
                <img src="/imgs/futureImage.png" className="w-100" alt="" />

                <div
                  className="mask"
                  style={{
                    background: 'linear-gradient(to top, black, #0000)',
                  }}
                >
                  <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center">
                    <div className="mb-3">
                      <a className=" stretched-link" href="/projects">
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
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol className="col-lg-4 col-sm-6 mt-4 mb-4">
              <div className="bg-image rounded-6">
                <img src="/imgs/valuesImage.png" className="w-100" alt="" />

                <div
                  className="mask"
                  style={{
                    background: 'linear-gradient(to top, black, #0000)',
                  }}
                >
                  <div className=" bottom-0 d-flex align-items-end h-100 text-center justify-content-center">
                    <div className="mb-3">
                      <a className=" stretched-link" href="/mission#values">
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
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'common'])),
    },
  };
}
