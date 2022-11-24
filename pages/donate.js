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

export default function Donate() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Donate to Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div
        className="mt-5 bg-image "
        style={{
          backgroundImage:
            'linear-gradient(to right top, #02282f, #053944, #0b4b5a, #135e71, #1d718a, #0c8297, #0093a1, #00a4a8, #1cb390, #66be68, #abc139, #f6b91c)',
        }}
      >
        <MDBContainer fluid className="py-5  ">
          <MDBRow className="d-flex justify-content-center align-items-center py-5">
            <MDBCol md="7" lg="5" xl="4">
              <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardImage
                  src="/imgs/finalizedlogo.png"
                  className="card-img-top "
                  alt="Operation Iranian Renaissance, abbreviated logo, containing the acronym 'OpIrRen' inside the black silhouette of Iran's land borders."
                />
                <MDBCardBody className="p-4">
                  <MDBRow className="d-flex align-items-center">
                    <p>{t('Donate:donate_description')}</p>
                    <a
                      className="btn btn-lg stretched-link mt-4 text-white"
                      href="https://donate.stripe.com/test_5kAg206RN32m4kU288"
                      target="_blank"
                      rel="noreferrer"
                      style={{ backgroundColor: '#2c8bac' }}
                    >
                      {t('Donate:donate_btn')}
                      <i className="fas fa-donate" />{' '}
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'Donate'])),
    },
  };
}
