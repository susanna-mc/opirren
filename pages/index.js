import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
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
  }
`;

const infoSection = css`
  display: flex;
  background-color: #2c8bac;
  flex-direction: row;
  padding: 20px 20px;
`;

const infoBoxes = css`
  margin: auto;

  flex-direction: column;
  a {
    color: #fff;
  }
  a:hover {
    color: #f6b91c;
  }
`;
// INFO BOXES
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
});

const styleda = styled.a({
  color: '#fff',
});

const MissionInfobox = styled.div({
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '350px',
  height: '350px',
  cursor: 'pointer',
  backgroundImage: 'url(/imgs/missionImage.png)',

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

const ProjectInfobox = styled.div({
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '350px',
  height: '350px',
  cursor: 'pointer',
  backgroundImage: 'url(/imgs/futureImage.png)',

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

const ValuesInfobox = styled.div({
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '350px',
  height: '350px',
  cursor: 'pointer',
  backgroundImage: 'url(/imgs/valuesImage.png)',

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

        <section css={infoSection}>
          <div className="container">
            <div className=" row m-5">
              <MissionInfobox
                className="col-lg-4 col-sm-6 mb-4 "
                css={infoBoxes}
              >
                <Link href="/mission#mission">
                  <a>
                    <DisplayOver>
                      <BigTitle>{t('index:mission')}</BigTitle>
                      <Hover>
                        <Paragraph>{t('index:mission_subheading')}</Paragraph>
                      </Hover>
                    </DisplayOver>
                  </a>
                </Link>
              </MissionInfobox>

              <ProjectInfobox
                className="col-lg-4 col-sm-6 mb-4 "
                css={infoBoxes}
              >
                <Link href="/projects">
                  <a>
                    <DisplayOver>
                      <BigTitle>{t('index:future_projects')}</BigTitle>
                      <Hover>
                        <Paragraph>
                          {t('index:future_projects_subheading')}
                        </Paragraph>
                      </Hover>
                    </DisplayOver>
                  </a>
                </Link>
              </ProjectInfobox>

              <ValuesInfobox
                className="col-lg-4 col-sm-6 mb-4 "
                css={infoBoxes}
              >
                <Link href="/mission#values">
                  <a>
                    <DisplayOver>
                      <BigTitle>{t('index:values')}</BigTitle>
                      <Hover>
                        <Paragraph>{t('index:values_subheading')}</Paragraph>
                      </Hover>
                    </DisplayOver>
                  </a>
                </Link>
              </ValuesInfobox>
            </div>
          </div>
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
