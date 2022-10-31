import { css } from '@emotion/react';

const footerStyles = css`
  background-color: #02282f;
  color: white;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p> Follow OpIrRen on [INSERT ICONS] IG Tel Tw</p>
    </footer>
  );
}
