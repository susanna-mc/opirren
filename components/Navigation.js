import { css } from '@emotion/react';
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LocaleSwitcher from './locale-switcher';

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

export default function Navigation() {
  const router = useRouter();

  const { t } = useTranslation('');
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  useEffect(() => {
    let dir = router.locale == 'fa' ? 'rtl' : 'ltr';
    let lang = router.locale == 'fa' ? 'fa' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [router.locale]);

  return (
    <header>
      <MDBNavbar expand="lg" fixed="top" role="navigation" css={navbar}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <a
              className={`nav-link ${router?.pathname === '/' ? 'active' : ''}`}
            >
              <img
                src="/imgs/logowhitelongform.png"
                alt="Operation Iranian Renaissance Logo"
                className="float-start"
                height="40px"
              />
            </a>
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
                <MDBNavbarLink href="/">
                  <a
                    className={`nav-link ${
                      router?.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    {t('common.home')}
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/mission">
                  <a
                    className={`nav-link ${
                      router?.pathname === '/mission' ? 'active' : ''
                    }`}
                  >
                    {t('common.mission')}
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/projects">
                  <a
                    className={`nav-link ${
                      router?.pathname === '/projects' ? 'active' : ''
                    }`}
                  >
                    {t('common.projects')}
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/donate">
                  <a
                    className={`nav-link ${
                      router?.pathname === '/donate' ? 'active' : ''
                    }`}
                  >
                    {t('common.donate')}
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className="navbar-text">
              {' '}
              <LocaleSwitcher />{' '}
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
