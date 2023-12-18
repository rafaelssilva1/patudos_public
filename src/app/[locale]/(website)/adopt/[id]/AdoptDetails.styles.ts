import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import Heading from "@base/components/heading/Heading";
import typography from "@base/theme/typography.styles";
import multilineOverflow from "@base/theme/multilineOverflow";
import { css } from "@emotion/react";
import Modal from "@base/components/modal/Modal";

export const InfoWrapper = styled.div`
  display: flex;
  gap: var(--spacing-24);
  flex-wrap: wrap;

  ${media.lteSmallMedia} {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: var(--spacing-14);
  width: 100%;
`;

export const OtherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-14);
  max-width: 12rem;
  width: 100%;
  max-width: fit-content;

  ${media.lteSmallMedia} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: var(--spacing-28);
  max-width: 75%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-48);
  position: relative;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  height: 100%;

  ${media.lteSmallMedia} {
    flex-direction: column-reverse;
  }
`;

export const PetDetailsWrapper = styled.div`
  margin-inline: var(--spacing-60) var(--spacing-0);
  margin-block: var(--spacing-60);
  width: 50%;

  ${media.lteSmallMedia} {
    width: 85%;
    margin-block: var(--spacing-16);
  }

  ${media.extraSmallMedia} {
    margin-inline: var(--spacing-16);
  }
`;

export const StyledShortDescription = styled.p`
  font-size: 3.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-16);

  ${media.lteSmallMedia} {
    margin-bottom: var(--spacing-60);
  }
  ${media.extraSmallMedia} {
    flex-direction: column;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  height: 100%;

  ${media.lteSmallMedia} {
    width: 100%;
    height: 40rem;
  }
`;

export const StyledDescription = styled.p`
  ${typography.p.default}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);

  ${media.lteSmallMedia} {
    color: var(--color-black);
  }

  ${media.extraSmallMedia} {
    left: unset;
    transform: translateY(-50%);
    margin-inline: var(--spacing-24);
    ${multilineOverflow({ maxLines: 24 })}
  }
`;

export const Overlay = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["showDescription"].includes(prop),
})<{ showDescription?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: var(--color-black-90);

  ${media.lteSmallMedia} {
    position: absolute;
    top: initial;
    bottom: 0;
    height: 80%;
    background-color: var(--color-white);
    transform: translateY(100%);
    transition: transform 200ms ease-in-out;

    ${({ showDescription }) =>
      showDescription &&
      css`
        transform: translateY(0%);
      `}
  }
`;

export const Backdrop = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["showDescription"].includes(prop),
})<{ showDescription?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-black-90);
  z-index: var(--index-hide);
  opacity: 0;

  ${({ showDescription }) =>
    showDescription &&
    css`
      opacity: 1;
      z-index: var(--index-backdrop);
    `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;

  color: var(--color-white);
  cursor: pointer;
  z-index: var(--index-default);

  ${media.lteSmallMedia} {
    color: var(--color-black);
  }
`;

export const StyledModal = styled(Modal)`
  background-color: var(--color-white);
  height: 100%;
  max-width: 144rem;

  ${media.gteSmallMedia} {
    width: 80%;
    height: 80%;
    overflow: hidden;
  }

  & div {
    color: var(--color-full-black);
  }
`;
