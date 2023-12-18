import styled from "@emotion/styled";
import Button from "../button/Button";
import { css } from "@emotion/react";
import Heading from "../heading/Heading";
import typography from "@base/theme/typography.styles";
import * as media from "@base/theme/custom-media";

const commonStyles = css`
  position: absolute;
  padding: var(--spacing-8);
  bottom: var(--spacing-16);
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  background: linear-gradient(
    8deg,
    rgba(0, 0, 0, 0.59) 28.87%,
    rgba(0, 0, 0, 0) 100.92%
  );
  mix-blend-mode: multiply;
`;

export const ImageWrapper = styled.div`
  & img {
    background: linear-gradient(
      8deg,
      rgba(0, 0, 0, 0.59) 28.87%,
      rgba(0, 0, 0, 0) 100.92%
    );
    mix-blend-mode: multiply;
  }
`;

export const StyledPreviousButton = styled(Button)`
  ${commonStyles};
  left: var(--spacing-16);
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--index-backdrop);
`;

export const StyledNextButton = styled(Button)`
  ${commonStyles};
  right: var(--spacing-16);
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--index-backdrop);
`;

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  color: var(--color-white);
  left: var(--spacing-32);
  bottom: var(--spacing-32);
`;

export const StyledSubtitle = styled.span`
  ${typography.p.large}
  width: fit-content;
  background-color: var(--color-main-default);
  bottom: var(--spacing-106);
  text-transform: uppercase;
  font-size: 2.5rem;
  padding: var(--spacing-4) var(--spacing-16);
  ${media.extraSmallMedia} {
    font-size: 1.6rem;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: 5rem;

  ${media.extraSmallMedia} {
    font-size: 3rem;
  }
`;

export const StyledMessage = styled.span`
  ${typography.p.large}
  bottom: var(--spacing-32);
  right: var(--spacing-32);
  font-size: 3rem;

  ${media.extraSmallMedia} {
    font-size: 2rem;
  }
`;
