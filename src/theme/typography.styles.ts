import { css } from "@emotion/react";

export const family = {
  poppins: "Poppins",
};

export const weight = {
  regular: 400,
  bold: 700,
};

export const fontPoppins = `${family.poppins}`;

const sharedStyles = css`
  font-family: ${family.poppins};
  line-height: 1.1;
`;

const typography = {
  fontPoppins,
  weight,
  h1: css`
    ${sharedStyles}
    font-size: 3.2rem;
  `,
  h2: css`
    ${sharedStyles}
    font-size: 2.4rem;
  `,
  h3: css`
    ${sharedStyles}
    font-size: 1.8rem;
  `,
  p: {
    large: css`
      font-size: 1.6rem;
      line-height: 1.5;
    `,
    default: css`
      font-size: 1.4rem;
      line-height: 1.4;
    `,
    defaultAlt: css`
      font-size: 1.4rem;
      line-height: 1.1;
      letter-spacing: 0.02rem;
    `,
    small: css`
      font-size: 1.2rem;
      line-height: 1.2;
    `,
  },
  a: {
    default: css`
      font-size: 1.6rem;
      line-height: 2.2rem;
      color: var(--color-black);
      text-decoration: none;
      cursor: pointer;
    `,
    alternative: css`
      font-size: 1.2rem;
      line-height: 1.8rem;
      letter-spacing: 0.08rem;
    `,
  },
};

export default typography;
