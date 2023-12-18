import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import typography from "@base/theme/typography.styles";
import Heading from "@base/components/heading/Heading";

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  height: auto;

  ${media.extraSmallMedia} {
    width: 100%;
    height: 50rem;
  }
`;

export const StyledText = styled.div`
  ${typography.p.default}
  & li, ul {
    list-style: unset;
  }

  padding: var(--spacing-32);
`;

export const AltImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 30rem;

  ${media.extraSmallMedia} {
    width: 100%;
    height: 20rem;
  }
`;

export const InnerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;

  ${media.extraSmallMedia} {
    & h1 {
      font-size: 2rem;
    }
  }
`;

export const StyledHeading = styled(Heading)`
  background-color: var(--color-main-default);
  color: var(--color-white);
  padding: var(--spacing-4) var(--spacing-16);
`;
