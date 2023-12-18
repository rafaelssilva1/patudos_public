import Heading from "@base/components/heading/Heading";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StylingProps } from "./OtherInfoCard.types";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
`;

export const StyledHeading = styled(Heading)`
  font-size: 1.6rem;

  ${media.lteSmallMedia} {
    font-size: 1.4rem;
  }
`;

export const IconWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["bgColor"].includes(prop),
})<StylingProps>`
  display: flex;
  align-items: center;

  width: 1.6rem;
  height: 1.6rem;

  ${({ bgColor }) => css`
    background-color: ${bgColor
      ? "var(--color-main-default)"
      : "var(--color-error)"};
  `}
  border-radius: var(--spacing-4);
`;
