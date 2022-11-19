import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { RegisterResponseBody } from './api/register';

export default function Register() {
  const { t } = useTranslation('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function registerHandler() {
    const registerResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password,
      }),
    });
    const registerResponseBody =
      (await registerResponse.json()) as RegisterResponseBody;

    console.log(registerResponseBody);
  }

  return (
    <>
      <Head>
        <title> Sign Up for OpIrRen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <section className=" vh-100 mt-5 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: '25px' }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          {t('register:signup')}
                        </p>
                        {/* USERNAME */}
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">
                                {t('register:name')}
                                <input
                                  className="form-control"
                                  value={username}
                                  onChange={(event) => {
                                    setUsername(
                                      event.currentTarget.value.toLowerCase(),
                                    );
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                          {/* PASSWORD */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">
                                {t('register:pw')}
                                <input
                                  type="password"
                                  className="form-control"
                                  value={password}
                                  onChange={(event) => {
                                    setPassword(event.currentTarget.value);
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                          {/* REGISTER BUTTON */}
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              style={{ backgroundColor: '#022026' }}
                              onClick={async () => {
                                await registerHandler();
                              }}
                            >
                              {t('register:register')}
                            </button>
                          </div>
                          {/* LOGIN LINK */}
                          <div className="d-flex justify-content-around align-items-center mb-4">
                            <Link href="/login">
                              {t('register:login_link')}
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 hover-zoom">
                        <img
                          src="/imgs/barandaz_farsi.jpeg"
                          className="img-fluid"
                          alt="Credit @taherehabdoli on Instagram"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'register'])),
    },
  };
}
