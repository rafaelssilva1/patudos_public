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

export const TextWrapper = styled.div`
  ${typography.p.default}
`;

export const StyledUl = styled.ul`
  list-style: unset;
`;

export const StyledLi = styled.li`
  list-style: unset;
`;

export const StyledHeading = styled(Heading)`
  margin-top: var(--spacing-32);
`;
