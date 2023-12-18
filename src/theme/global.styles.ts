"use client";

import { css } from "@emotion/react";
import normalize from "emotion-normalize";

import typography from "./typography.styles";
import fontFaces from "./font-faces";
import customProperties from "./custom-properties.styles";

export default css`
  ${normalize};
  ${fontFaces};
  ${customProperties};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /**
         * Font size 10px on default browser settings.
         * It's used as 62.5% to adapt to changes in the browser's default font-size.
         */
    font-size: 62.5%;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-family: ${typography.fontPoppins};
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  body,
  #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  #root {
    min-height: 100%;
  }

  main {
    flex-grow: 1;
  }

  /**
     * Correct the font size and margin on heading elements within \`section\` and \`article\` contexts.
     * Useful to keep semantics without overriding previous styles.
     */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 1.8rem;
  }

  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /**
     * Override Firefox's stylesheet for red box shadow on invalid fields
     * @see view-source:resource://gre-resources/forms.css
     */

  :not(output):-moz-ui-invalid {
    box-shadow: none;
  }

  :not(output):-moz-ui-invalid:-moz-focusring {
    box-shadow: none;
  }

  /**
     * Default headings
     */

  h1 {
    ${typography.h1};
  }

  img {
    /* stylelint-disable-next-line */
    image-rendering: -webkit-optimize-contrast;
  }

  button {
    border: none;
    background: none;
    appearance: none;
    padding: 0;
    cursor: pointer;

    /**
         * On Safari if a SVG has 'fill="currentColor"'
         * on active state the SVG will become white,
         * this rule overrides the Safari rule
         * 'color: "activebuttontext"'
         */
    color: initial;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    ${typography.a.default}
  }

  /**
     * Accessibility improvements
     */

  [role="tooltip"] {
    display: none;
  }

  input[type="search"]::-webkit-search-cancel-button {
    /* stylelint-disable-next-line */
    -webkit-appearance: none;
  }

  input {
    cursor: context-menu;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    ${typography.p.large}
  }
`;
