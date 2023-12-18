import { css } from "@emotion/react";

import colors from "./colors.styles";
import spacing from "./spacing.styles";
import layover from "./layover";

export default css`
  :root {
    ${colors};
    ${layover};
    ${spacing}
  }
`;
