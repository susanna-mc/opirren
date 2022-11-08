import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';

const footerStyles = css`
  background-color: #02282f;
`;

export default function Footer() {
  const { t } = useTranslation('');
  return (
    <div>
      <footer
        css={footerStyles}
        id="sticky-footer"
        className="flex-shrink-0 py-4 bg-dark text-white-50 position-sticky"
      >
        <div className="container text-center">
          <p className="lead text-white-50">
            {t('common.follow')}
            <img src="/imgs/icons8-twitter-circled.svg" alt="PLACEHOLDER" />
            <img src="/imgs/icons8-instagram.svg" alt="PLACEHOLDER" />
            <img src="/imgs/icons8-telegram-app.svg" alt="PLACEHOLDER" />
          </p>
          <small>Copyright &copy; Operation Iranian Renaissance</small>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
