import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Navigation from '../components/Navigation';

export default function Projects() {
  const { t } = useTranslation('');

  return (
    <div>
      <Navigation />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="col-lg-4 col-sm-6 mb-4">
            <div className="bg-image  hover-zoom hover-shadow ">
              <img
                src="imgs/missionImage.png"
                className="img-fluid "
                alt="placeholder"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: 'rgba(0, 0, 30, 0.4)' }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <h2 className="text-white mb-0">{t('index:mission')} </h2>

                    <p className="text-white mb-0">
                      {t('index:mission_subheading')}
                    </p>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                  />
                </div>
              </a>
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
