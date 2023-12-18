import { css } from "@emotion/react";

const multilineOverflow = ({ maxLines }: { maxLines: number }) => css`
  text-overflow: ellipsis;
  overflow: hidden;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${maxLines};
`;

export default multilineOverflow;
