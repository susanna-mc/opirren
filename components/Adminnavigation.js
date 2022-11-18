import { css } from '@emotion/react';
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useState } from 'react';

const navbar = css`
  background-color: #2c8bac;
  padding: 10px;
  display: flexbox;
  color: #f6b91c;

  a {
    margin-left: 20px;
    color: #f6b91c;
    font-weight: bold;
  }
  a:hover {
    color: white;
    font-weight: bold;
  }
  a:active {
    color: white;
    font-weight: bold;
  }
`;

// const donateButton = css`
//   background-color: #0326cb;
//   padding: 10px 5px;
//   border-radius: 15px;
//   height: 20px;
// margin-left: 20px;
// `;

export default function Adminnavigation() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <div>
      <header>
        <MDBNavbar
          expand="lg"
          fixed="top"
          role="navigation"
          css={navbar}
          className="shadow-4-strong"
        >
          <MDBContainer fluid>
            <MDBNavbarBrand>
              <Link href="/">
                <img
                  src="/imgs/logowhitelongform.png"
                  alt="Operation Iranian Renaissance Logo"
                  className="float-start"
                  height="50px"
                />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
            >
              <MDBIcon style={{ color: '#f6b91c' }} icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavNoTogglerSecond}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <Link href="/">
                    <a>Log Out</a>
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </div>
  );
}
