import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LocaleSwitcher from './locale-switcher';

const navbar = css`
  background-color: #2c8bac;
  padding: 20px;
  display: flexbox;

  a {
    margin-left: 20px;
    color: #f6b91c;
    font-weight: bold;
  }
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
        <div>
          <div>
            <Link href="/">
              <a
                className={`nav-link ${
                  router?.pathname === '/' ? 'active' : ''
                }`}
              >
                {t('common.home')}
              </a>
            </Link>

            <Link href="/mission">
              <a
                className={`nav-link ${
                  router?.pathname === '/mission' ? 'active' : ''
                }`}
              >
                {t('common.mission')}
              </a>
            </Link>

            <Link href="/projects">
              <a
                className={`nav-link ${
                  router?.pathname === '/projects' ? 'active' : ''
                }`}
              >
                {t('common.projects')}
              </a>
            </Link>

            <Link href="/donate">
              <a
                className={`nav-link ${
                  router?.pathname === '/donate' ? 'active' : ''
                }`}
              >
                {t('common.donate')}
              </a>
            </Link>

            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
