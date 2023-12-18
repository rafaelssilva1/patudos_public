import Link from "@base/components/link/Link";
import { weight } from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-60);
  gap: var(--spacing-48);

  ${media.lteSmallMedia} {
    margin-inline: var(--spacing-16);
  }
`;

export const PetsWrapperGrid = styled.div`
  max-width: 144rem;
  overflow-x: hidden;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 21rem);
  gap: var(--spacing-32);

  ${media.mediumMedia} {
    grid-template-columns: repeat(3, 21rem);
  }
  ${media.smallMedia} {
    grid-template-columns: repeat(2, 21rem);
  }
  ${media.extraSmallMedia} {
    grid-template-columns: repeat(1, minmax(21rem, 35rem));
    gap: var(--spacing-16);
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-full-black);
  font-weight: ${weight.regular};
`;
