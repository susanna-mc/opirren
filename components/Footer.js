import { css } from '@emotion/react';
import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';

const footerStyles = css`
  background-color: #02282f;
`;

export default function Footer() {
  const { t } = useTranslation('');
  return (
    <MDBFooter
      fixed="bottom"
      className="text-center text-white "
      css={footerStyles}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#0088cc' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="telegram-plane" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Copyright &copy; Operation Iranian Renaissance
      </div>
    </MDBFooter>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
