import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${typography.p.large}
  white-space: nowrap;
  color: var(--color-white);
`;

export const StyledLocale = styled.span`
  ${typography.p.large};
  color: var(--color-white);
  cursor: pointer;
`;
