import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Navigation from '../components/Navigation';

export default function Login() {
  return (
    <div>
      <Navigation />
      <section className="vh-100 mt-5">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 ">
              <img
                src="/imgs/ArminWhisper2.png"
                className="img-fluid square border shadow-5-strong border "
                alt="Phone "
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <form>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4 ">
                      <input
                        type="text"
                        id="username"
                        className="form-control form-control-lg "
                      />
                      <label className="form-label" for="username">
                        Username
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="password">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* <!-- Checkbox --> */}

                      <a href="#!">Forgot password? Talk to Susanna</a>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: '#022026' }}
                    >
                      Sign in
                    </button>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        ! حجاب، فقط بهانه است اصل نظام، نشانه است{' '}
                      </p>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
