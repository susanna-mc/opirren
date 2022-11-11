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

const infobox = css`
  a {
    color: #fff;
  }

  a:hover {
    color: #f6b91c;
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      BREAK
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="col-lg-4 col-sm-6 mb-4">
            <div className="bg-image hover-shadow " css={infobox}>
              <img
                src="/imgs/missionImage.png"
                className="img-fluid "
                alt="placeholder"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100  ">
                    <h2 className=" mb-0">{t('index:mission')} </h2>

                    <span className="   mb-0">
                      {t('index:mission_subheading')}
                    </span>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                  />
                </div>
              </a>
            </div>
            BREAK
            <div
              className="p-5 text-center bg-image"
              style={{
                backgroundImage: 'url(/imgs/missionImage.png)',
                height: '400px',
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                    <MDBBtn tag="a" outline size="lg">
                      Call to action
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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