import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Login() {
  const { t } = useTranslation('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Head>
        <title>Log In to OpIrRen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="vh-100 mt-5">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 ">
              <img
                src="/imgs/bihijab.jpeg"
                className="img-fluid square border shadow-5-strong border "
                alt="Credit @naghmehjah on Instagram"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <form>
                    {/* <!-- Username input --> */}
                    <div className="form-outline mb-4 ">
                      <input
                        id="username"
                        className="form-control form-control-lg "
                        value={username}
                        onChange={(event) => {
                          setUsername(event.currentTarget.value);
                        }}
                      />
                      <label className="form-label" htmlFor="username">
                        {t('Log_In:username')}
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.currentTarget.value);
                        }}
                      />
                      <label htmlFor="password" className="form-label">
                        {t('Log_In:pw')}
                      </label>
                    </div>

                    {/* <div className="d-flex justify-content-around align-items-center mb-4">
                      <a href="#!">Forgot password? Talk to Susanna</a>
                    </div> */}

                    {/* <!-- Submit button --> */}
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: '#022026' }}
                    >
                      {t('Log_In:log-in')}
                    </button>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        ! زن زندگی آزادی
                      </p>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </section>
      <Footer className="mt-4" />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'Log_In'])),
    },
  };
}
