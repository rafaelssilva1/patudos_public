import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  ButtonVariants,
  IconPosition,
  Sizes,
  StylingProps,
} from "./Button.types";
import typography from "@base/theme/typography.styles";

export const commmonStyles = css`
  padding: var(--spacing-8) var(--spacing-24);
  border-radius: 1rem;

  &:disabled {
    cursor: not-allowed;
  }
`;

const baseButtonStyles = {
  [ButtonVariants.Primary]: css`
    ${commmonStyles}
    background-color: var(--color-main-default);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-main-hover);
    }
    &:active {
      background-color: var(--color-main-active);
    }
    &:disabled {
      background-color: var(--color-main-disabled);
      color: var(--color-text-grey);
    }
  `,
  [ButtonVariants.Secondary]: css`
    ${commmonStyles}
    background-color: var(--color-white);
    color: var(--color-main-default);
    border: 0.1rem solid var(--color-main-default);

    &:hover {
      color: var(--color-main-hover);
      border: 0.1rem solid var(--color-main-hover);
    }
    &:active {
      color: var(--color-main-active);
      border: 0.1rem solid var(--color-main-active);
    }
    &:disabled {
      color: var(--color-main-disabled);
      border: 0.1rem solid var(--color-main-disabled);
    }
  `,
};

export const BaseButton = styled("button", {
  shouldForwardProp: (prop: string): boolean =>
    !["variant", "size", "icon", "iconPosition", "hasChildren"].includes(prop),
})<StylingProps>`
  ${typography.p.large}
  line-height: 0;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
  white-space: nowrap;

  ${({ variant = ButtonVariants.Primary }) => baseButtonStyles[variant]};

  ${({ size }) =>
    size === Sizes.Small &&
    css`
      ${typography.p.default}
      line-height: 0;
      height: 3.2rem;
      padding: var(--spacing-6) var(--spacing-14);
    `};
  ${({ icon, iconPosition, size }) =>
    icon && iconPosition === IconPosition.Left
      ? css`
          padding-inline-start: ${size === Sizes.Default
            ? "var(--spacing-20)"
            : "var(--spacing-12)"};
        `
      : css`
          padding-inline-end: ${size === Sizes.Default
            ? "var(--spacing-20)"
            : "var(--spacing-12)"};
        `};

  ${({ hasChildren }) =>
    !hasChildren &&
    css`
      padding: var(--spacing-8);
    `};
`;
