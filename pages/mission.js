import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
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
                    src="/imgs/mission1stimage.jpg"
                    className="w-100  "
                    alt="Photograph by Babak Dalivand, in Austria, Vienna, 2022. Three hands of Iranians protesting, two male and one female, are raised high in the 'peace sign,' also known as the 'victory sign.'"
                  />{' '}
                </div>
              </MDBCol>
              <MDBCol md="6" className="p-4 ps-md-0 mt-5">
                <MDBCard>
                  <MDBCardBody>
                    <h2
                      id="mission"
                      className=" display-4 text-decoration-underline"
                    >
                      {t('mission:mission_statement_heading')}
                    </h2>
                    <h3 className=" display-6">
                      {t('mission:mission_statement_domestic')}
                    </h3>
                    <p>{t('mission:mission_statement_domestic_subheading')}</p>
                    <h3 className=" display-6">
                      {t('mission:mission_statement_international')}
                    </h3>
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
                    <h1 className=" display-4  text-decoration-underline">
                      {t('mission:values_statement_heading')}
                    </h1>
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
                    src="/imgs/missionvalues.jpg"
                    className="w-100 "
                    alt="Photograph by Babak Dalivand, in Austria, Vienna, 2022. An Iranian woman is pictured protesting in front of St. Stephen's Cathedral in Vienna. She has dark hair and a black sweatshirt and is wearing red face paint in the appearance of bloody tears; her mouth is slightly agape. She holds a cardboard sign as she looks downwards and toward the right. A crowd can be seen behind her."
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
