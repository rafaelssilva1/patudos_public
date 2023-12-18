import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import { Close, HamburguerMenu } from "@base/components/icons";
import { css } from "@emotion/react";
import { StylingProps } from "./Header.types";
import BaseLink from "@base/components/link/Link";
import { weight } from "@base/theme/typography.styles";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-48);

  background-color: var(--color-bg-dark-grey);
  padding: var(--spacing-10) var(--spacing-40);

  z-index: var(--index-menu);
`;

export const StyledHamburguerMenu = styled(HamburguerMenu)`
  color: white;
  cursor: pointer;
`;

export const MenuWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["isOpen", "isCurrent"].includes(prop),
})<StylingProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-dark-grey);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-48);
  padding: var(--spacing-48);
  text-transform: uppercase;
  transform: translateX(100%);
  transition: transform 200ms ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0%);
    `}

  ${media.gteMediumMedia} {
    display: none;
  }
`;

export const StyledClose = styled(Close)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 3rem;
  right: 4rem;
`;

export const StyledLink = styled(BaseLink, {
  shouldForwardProp: (prop: string): boolean => !["isCurrent"].includes(prop),
})<StylingProps>`
  color: var(--color-white);
  font-weight: ${weight.bold};
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom: 0.3rem solid var(--color-main-default);
    `}
`;
