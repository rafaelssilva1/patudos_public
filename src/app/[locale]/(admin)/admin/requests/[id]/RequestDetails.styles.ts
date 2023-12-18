import Button from "@base/components/button/Button";
import BaseLink from "@base/components/link/Link";
import typography, { weight } from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: var(--spacing-32);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
`;

export const ElementWrapper = styled.div`
  ${typography.p.default}
`;

export const ComponentText = styled.span`
  font-weight: ${weight.bold};
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

export const MainWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  right: var(--spacing-16);
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
