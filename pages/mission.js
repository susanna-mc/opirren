import { css } from '@emotion/react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const heroBackground = css`
  position: absolute;
  height: auto;

  img:nth-child(1) {
    border-radius: 0 50% 0 0;
    float: left;
  }
`;

export default function Mission() {
  const { t } = useTranslation('');
  // const divStyle = {
  //   height: '100%',
  //   width: '100%',
  //   // width: '100vw',
  //   // height: '100vh',
  //   backgroundImage: `url(/imgs/iranborders.png)`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // };
  return (
    <div>
      <Head>
        <title>Mission: Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navigation />
      <div
        className="mt-5 bg-image  "
        style={{
          backgroundImage: `url(/imgs/iranborders.png)`,
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />{' '}
        <section>
          <MDBContainer>
            <MDBRow className="g-0  position-relative" id="mission">
              <MDBCol md="6" className="mb-md-0 p-md-4 mt-5 ">
                <div className="bg-image img-fluid hover-zoom shadow-4-strong ">
                  <img
                    src="/imgs/missiontest1.png"
                    className="w-100  "
                    alt="..."
                  />{' '}
                </div>
              </MDBCol>
              <MDBCol md="6" className="p-4 ps-md-0 mt-5">
                <MDBCard>
                  <MDBCardBody>
                    <h2 id="mission">
                      {t('mission:mission_statement_heading')}
                    </h2>
                    <h3>{t('mission:mission_statement_domestic')}</h3>
                    <p>{t('mission:mission_statement_domestic_subheading')}</p>
                    <h3>{t('mission:mission_statement_international')}</h3>
                    <p>
                      {t('mission:mission_statement_international_subheading')}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer id="values">
            <MDBRow className="g-0 position-relative mb-1">
              <MDBCol md="6" className="p-4 mt-5 ">
                <MDBCard>
                  <MDBCardBody>
                    <h2>{t('mission:values_statement_heading')}</h2>
                    <p>{t('mission:values_statement_subheading')} </p>
                    <ul>
                      <li>{t('mission:values_democracy')}</li>
                      <li>{t('mission:values_expression')}</li>
                      <li>{t('mission:values_secularism')}</li>
                      <li>{t('mission:values_territory')}</li>
                      <li>{t('mission:values_pluralism')}</li>
                    </ul>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" className="mb-md-0 p-md-4 mt-5">
                <div className="bg-image img-fluid hover-zoom shadow-4-strong">
                  <img
                    src="/imgs/valuespagetest.png"
                    className="w-100 "
                    alt="..."
                  />{' '}
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
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
