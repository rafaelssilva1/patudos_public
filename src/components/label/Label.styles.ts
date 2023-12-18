import styled from "@emotion/styled";
import { StylingProps } from "./Label.types";
import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";

export const BaseLabel = styled("label", {
  shouldForwardProp: (prop: string): boolean => !["isTyping"].includes(prop),
})<StylingProps>`
  ${typography.p.default}

  position: absolute;
  left: var(--spacing-14);
  padding-inline: var(--spacing-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-main-default);

  ${({ required }) =>
    required &&
    css`
      &::after {
        content: "*";
        color: var(--color-error);
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-text-light-grey);
      cursor: not-allowed;
    `}
  
    ${({ isTyping }) =>
    isTyping &&
    css`
      top: 0;
      left: var(--spacing-14);
      background-color: white;
      padding-inline: var(--spacing-4);
      transition: top 0.1s ease-out;

      ${typography.p.small}
    `}
`;
