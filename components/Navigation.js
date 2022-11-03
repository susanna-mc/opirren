import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
`;

const donateButton = css`
  background-color: #0326cb;
  border-radius: 15px;
  height: 35px;
  margin-left: 20px;
`;

export default function Navigation() {
  const router = useRouter();

  const { t } = useTranslation('');

  useEffect(() => {
    let dir = router.locale == 'fa' ? 'rtl' : 'ltr';
    let lang = router.locale == 'fa' ? 'fa' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [router.locale]);

  return (
    <header>
      <nav css={navbar}>
        {/* <div >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
        <div>
          <ul>
            <Link href="/">
              <a
                className={`nav-link ${
                  router?.pathname === '/' ? 'active' : ''
                }`}
              >
                <img
                  src="/logowhitelongform.png"
                  alt="Operation Iranian Renaissance Logo"
                  height="40px"
                />
              </a>
            </Link>
            <li href="/">
              <Link href="/">
                <a
                  className={`nav-link ${
                    router?.pathname === '/' ? 'active' : ''
                  }`}
                >
                  {t('common.home')}
                </a>
              </Link>
            </li>

            <li href="/mission">
              <Link href="/mission">
                <a
                  className={`nav-link ${
                    router?.pathname === '/mission' ? 'active' : ''
                  }`}
                >
                  {t('common.mission')}
                </a>
              </Link>
            </li>

            <li href="/projects">
              <Link href="/projects">
                <a
                  className={`nav-link ${
                    router?.pathname === '/projects' ? 'active' : ''
                  }`}
                >
                  {t('common.projects')}
                </a>
              </Link>
            </li>

            <li href="/donate" css={donateButton}>
              <Link href="/donate">
                <a
                  className={`nav-link ${
                    router?.pathname === '/donate' ? 'active' : ''
                  }`}
                >
                  {t('common.donate')}
                </a>
              </Link>
            </li>
            <li>
              <LocaleSwitcher />{' '}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
