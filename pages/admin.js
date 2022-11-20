import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Adminnavigation from '../components/Adminnavigation';

// import { getValidSessionByToken } from '../database/sessions';
// import { getUserBySessionToken, User } from '../database/users';

export default function Admin() {
  return (
    <div>
      <Head>
        <title>Backend: OpIrRen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Adminnavigation />
      <section className="vh-100 mt-5">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <MDBCard className="h-100">
                <img className="card-img-top" src="/imgs/cattype.gif" alt="" />
                <MDBCardBody>
                  <form>
                    <label htmlFor="formFileLg" className="form-label">
                      Upload File to Database
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <button
                      className="btn btn-primary btn-lg btn-block mt-3"
                      style={{ backgroundColor: '#022026' }}
                    >
                      Upload
                      <i className="fas fa-upload" />
                    </button>
                    {/* <button
                      className="btn btn-primary btn-lg btn-block mt-3"
                      type="button"
                      style={{ backgroundColor: '#022026' }}
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Uploading...
                    </button> */}
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

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'index'])),
//     },
//   };
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const token = context.req.cookies.sessionToken;

//   // const user = token && (await getUserBySessionToken(token));

//   if (!token || !(await getValidSessionByToken(token))) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
