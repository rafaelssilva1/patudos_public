import styled from "@emotion/styled";
import Heading from "../heading/Heading";
import typography, { weight } from "@base/theme/typography.styles";
import BaseLink from "../link/Link";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.footer`
  margin-top: auto;
  padding: var(--spacing-60) var(--spacing-128);

  display: flex;
  justify-content: center;
  gap: var(--spacing-160);

  ${media.lteSmallMedia} {
    gap: var(--spacing-48);
  }

  background-color: var(--color-bg-dark-grey);

  ${media.extraSmallMedia} {
    flex-direction: column;
    gap: var(--spacing-40);
    padding: var(--spacing-40) var(--spacing-36);
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: 1.6rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const StyledLink = styled(BaseLink)`
  font-weight: ${weight.regular};
  color: var(--color-white);
`;

export const StyledSpan = styled.span`
  ${typography.p.large}
  color: var(--color-white);
`;
