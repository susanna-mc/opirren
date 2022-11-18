import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Register() {
  const { t } = useTranslation('');
  return (
    <div>
      <main>
        <Navigation />
        <section className="vh-100 mt-5">
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

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                id="form3Example1c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                {t('register:name')}
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example3c"
                              >
                                {t('register:email')}
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                {t('register:pw')}
                              </label>
                            </div>
                          </div>

                          {/* <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example4cd"
                              >
                                Repeat your password
                              </label>
                            </div>
                          </div> */}

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              style={{ backgroundColor: '#022026' }}
                            >
                              {t('register:register')}
                            </button>
                          </div>
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
                          alt="Sample"
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
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'register'])),
    },
  };
}
