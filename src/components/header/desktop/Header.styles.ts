import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import { css } from "@emotion/react";
import { StylingProps } from "./Header.types";
import BaseLink from "@base/components/link/Link";
import { weight } from "@base/theme/typography.styles";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-48);

  background-color: var(--color-bg-dark-grey);
  padding: var(--spacing-10) var(--spacing-40);

  ${media.lteSmallMedia} {
    display: none;
  }
`;

export const MenuWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["isCurrent"].includes(prop),
})<StylingProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: var(--spacing-32);
  color: var(--color-white);
  width: 100%;
`;

export const StyledLink = styled(BaseLink, {
  shouldForwardProp: (prop: string): boolean => !["isCurrent"].includes(prop),
})<StylingProps>`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: ${weight.bold};
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom: 0.3rem solid var(--color-main-default);
    `}
`;
