import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Donate() {
  const { t } = useTranslation('');
  return (
    <div>
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
                  class="card-img-top"
                  alt="Black Chair"
                ></MDBCardImage>
                <MDBCardBody className="p-4">
                  <MDBRow className="d-flex align-items-center">
                    <MDBCol></MDBCol>
                    <h1> DONATION VERBIAGE </h1>
                    <a
                      className="btn btn-lg stretched-link mt-4"
                      href="https://donate.stripe.com/test_5kAg206RN32m4kU288"
                    >
                      Donate <i className="fas fa-donate"></i>{' '}
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
