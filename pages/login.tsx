import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { LoginResponseBody } from './api/login';

export default function Login() {
  const { t } = useTranslation('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function loginHandler() {
    const loginResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password,
      }),
    });
    const loginResponseBody = (await loginResponse.json()) as LoginResponseBody;

    if ('errors' in loginResponseBody) {
      setErrors(loginResponse.errors);
      return console.log(loginResponse.errors);
    }
    await router.push('/admin');
  }
  return (
    <>
      <Head>
        <title>Log In to OpIrRen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="vh-100 mt-5 mb-5">
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
                    {/* <!-- Error message --> */}
                    {errors.map((error) => {
                      return <p key={error.message}>ERROR: [error.message]</p>;
                    })}
                    {/* <!-- Username input --> */}
                    <div className="form-outline mb-4 ">
                      <label className="form-label">
                        {t('Log_In:username')}
                        <input
                          className="form-control form-control-lg "
                          value={username}
                          onChange={(event) => {
                            setUsername(
                              event.currentTarget.value.toLowerCase(),
                            );
                          }}
                        />
                      </label>
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        {t('Log_In:pw')}
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(event) => {
                            setPassword(event.currentTarget.value);
                          }}
                        />
                      </label>
                    </div>
                    {/* <!-- Submit button --> */}
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: '#022026' }}
                      onClick={async () => {
                        await loginHandler();
                      }}
                    >
                      {t('Log_In:log-in')}
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center  mx-3 mb-0 text-muted">
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
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'Log_In'])),
    },
  };
}
