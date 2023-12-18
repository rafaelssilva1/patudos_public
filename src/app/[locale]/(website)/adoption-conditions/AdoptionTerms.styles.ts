import Heading from "@base/components/heading/Heading";
import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: var(--spacing-32) auto;
  max-width: 144rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
`;

export const StyledText = styled.span`
  ${typography.p.default}
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: var(--spacing-24);
`;

export const StyledLink = styled.a`
  ${typography.p.default}
  color: var(--color-main-default);
`;
