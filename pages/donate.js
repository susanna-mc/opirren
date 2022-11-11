import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
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
                <MDBCardBody className="p-4">
                  <MDBRow className="d-flex align-items-center">
                    <MDBCol size="9">
                      <MDBInput
                        label="Card Number"
                        id="form1"
                        type="text"
                        placeholder="1234 5678 9012 3457"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <img
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt="visa"
                        width="64px"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <MDBInput
                        label="Cardholder's Name"
                        id="form2"
                        type="text"
                        placeholder="Cardholder's Name"
                      />
                    </MDBCol>

                    <MDBCol size="6 mt-3">
                      <MDBInput
                        label="Expiration"
                        id="form2"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </MDBCol>
                    <MDBCol size="3 mt-3">
                      <MDBInput
                        label="CVV"
                        id="form2"
                        type="text"
                        placeholder="&#9679;&#9679;&#9679;"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <MDBBtn color="info" rounded size="lg">
                        <MDBIcon fas icon="arrow-right" />
                      </MDBBtn>
                    </MDBCol>
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
