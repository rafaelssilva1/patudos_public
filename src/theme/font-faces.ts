import { css } from "@emotion/react";

import { family, weight } from "./typography.styles";

export default css`
  @font-face {
    font-family: ${family.poppins};
    font-weight: ${weight.regular};
    font-style: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2)
      format("woff2");
  }
  @font-face {
    font-family: ${family.poppins};
    font-weight: ${weight.bold};
    font-style: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)
      format("woff2");
  }
`;
