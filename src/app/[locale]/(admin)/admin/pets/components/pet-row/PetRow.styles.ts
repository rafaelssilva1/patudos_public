import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.tr`
  cursor: pointer;
  & td {
    padding-block: var(--spacing-8);
  }
`;

export const StyledTd = styled.td`
  ${typography.p.default}
`;

export const StyledIdTd = styled.td`
  ${typography.p.default}
  width: 10rem;
`;

export const StyledStatusTd = styled.td`
  width: 15rem;
`;
