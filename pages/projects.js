import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Projects() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Projects: Operation Iranian Renaissance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <header>
          <div
            className="p-5 mt-5 text-center bg-image "
            style={{
              backgroundImage: 'url(/imgs/circlemosiac1.jpeg)',
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
                    {t('projects:title')}
                  </MDBTypography>

                  <MDBTypography className=" display-6 mb-3 fs-2  fw-lighter">
                    {t('projects:title_subheading')}
                  </MDBTypography>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="m-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="/downloads/protestsafely.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/protestdisplaysquare.svg"
                        className="w-100"
                        alt="Preview of 'How to Protest Safely' Persian-language manual."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>{t('index:protest_safely')}</MDBCardTitle>
                    <MDBCardText>
                      {t('index:protest_safely_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="/downloads/protestsafely.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_pdf')} <i className="fas fa-download" />
                  </a>
                </MDBCard>
              </MDBCol>

              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="https://drive.google.com/drive/folders/1ktEu_SQK-KBShEkkRiG-Lzaj1PA-3JIM?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/distributivematerials.svg"
                        className="w-100"
                        alt="Preview of pre-made social media posts for easy distribution of Operation Iranian Renaissance Persian-language manuals."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>
                      {t('index:social_media_assets')}
                    </MDBCardTitle>
                    <MDBCardText>
                      {t('index:social_media_assets_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="https://drive.google.com/drive/folders/1ktEu_SQK-KBShEkkRiG-Lzaj1PA-3JIM?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_img')} <i className="fas fa-images" />
                  </a>
                </MDBCard>
              </MDBCol>

              <MDBCol className="col-lg-4 col-sm-6 mb-4">
                <MDBCard className="h-100">
                  <div className="bg-image hover-zoom">
                    <a
                      href="/downloads/treatbleeding.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/imgs/bleedingdisplaysquare.svg"
                        className="w-100"
                        alt="Preview of 'How to Treat Bleeding and Gunshot Wounds' Persian-language manual."
                      />
                    </a>
                  </div>

                  <MDBCardBody>
                    <MDBCardTitle>{t('index:treat_wounds')}</MDBCardTitle>
                    <MDBCardText>
                      {t('index:treat_wounds_subheading')}
                    </MDBCardText>
                  </MDBCardBody>

                  <a
                    className="btn btn-info btn-lg text-white"
                    href="/downloads/treatbleeding.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#2c8bac' }}
                  >
                    {t('common:download_pdf')} <i className="fas fa-download" />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBRow className="g-0 bg-light position-relative">
            <MDBCol md="6" className="mb-md-0 p-md-4">
              <div className="bg-image hover-zoom">
                <img
                  src="/imgs/futureprojects.jpg"
                  className="w-100"
                  alt="Photograh by Babak Dalivand, in Austria, Vienna, 2022. Taken Saturday, October 8th, 2022 in Stephanzplatz plaza, Vienna, Austria as part of the 'Global Day Of Solidarity With Iranian Women.' A protest leader stands in the center of a circle of protesters. He has black hair and is wearing a dark sweater and a collared shirt. He is holding two microphones in his left hand, raised to his face as he yells a chant. His right arm is raised high above his head as he holds a clipboard. Hundreds of protesters are seen far into the horizon."
                />
              </div>
            </MDBCol>
            <MDBCol md="6" className="p-4 ps-md-0">
              <h1 className="mt-0">{t('projects:future_projects')}</h1>
              <p>{t('projects:future_projects_subheading')}</p>
            </MDBCol>
          </MDBRow>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'index',
        'projects',
      ])),
    },
  };
}
