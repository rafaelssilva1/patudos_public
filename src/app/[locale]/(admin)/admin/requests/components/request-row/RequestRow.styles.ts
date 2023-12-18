import Button from "@base/components/button/Button";
import BaseLink from "@base/components/link/Link";
import typography, { weight } from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.tr`
  & td {
    padding-block: var(--spacing-8);
  }
`;

export const StyledText = styled.span`
  ${typography.p.default}
`;

export const StyledTd = styled.td`
  position: relative;
`;

export const SelectedWrapper = styled.div`
  position: absolute;
  z-index: var(--index-menu);
  background-color: var(--color-white);
  width: 100%;
  ${typography.p.small}
  border: 0.1rem solid var(--color-text-grey);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-8);

  & p {
    cursor: pointer;
  }
`;

export const StyledStatusElement = styled.p`
  &:hover {
    font-weight: ${weight.bold};
  }
`;

export const StyledLink = styled(BaseLink)`
  ${typography.p.default};
  color: var(--color-main-default);
`;

export const StyledButton = styled(Button)`
  margin-left: var(--spacing-16);
`;
