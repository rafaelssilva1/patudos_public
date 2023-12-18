import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import typography from "@base/theme/typography.styles";

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  ${media.extraSmallMedia} {
    flex-direction: column;
  }
`;

export const InnerTextWrapper = styled.div`
  margin: var(--spacing-32);
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);

  ${media.extraSmallMedia} {
    width: 80%;
  }
`;

export const TextWrapper = styled.div`
  background-color: var(--color-main-default);
  color: var(--color-white);
  padding: var(--spacing-32);
`;

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
