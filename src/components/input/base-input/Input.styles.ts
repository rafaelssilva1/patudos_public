import styled from "@emotion/styled";
import { StylingProps } from "./Input.types";
import { css } from "@emotion/react";
import typography from "@base/theme/typography.styles";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-block: var(--spacing-8);
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const BaseInput = styled("input", {
  shouldForwardProp: (prop: string): boolean =>
    !["isTyping", "showError", "showIcon"].includes(prop),
})<StylingProps>`
  width: 100%;
  ${typography.p.large}
  height: 4rem;
  padding: var(--spacing-8) var(--spacing-16);

  border: 0.1rem solid var(--color-stroke-grey);
  border-radius: var(--spacing-10);

  background-color: var(--color-white);
  color: var(--color-text-grey);
  outline: none;

  &:hover {
    border-color: var(--color-main-hover);
  }
  &:active,
  &:focus {
    border-color: var(--color-main-active);
  }
  &:disabled {
    background-color: var(--color-bg-light-grey);
    color: var(--color-text-light-grey);
    border-color: var(--color-text-light-grey);
    cursor: not-allowed;
  }

  ${({ isTyping }) =>
    isTyping &&
    css`
      color: var(--color-black);
    `}
  ${({ showError }) =>
    showError &&
    css`
      border-color: var(--color-error);
      &:hover,
      &:active,
      &:focus {
        border-color: var(--color-error);
      }
    `}
  ${({ showIcon }) =>
    showIcon &&
    css`
      padding-inline-end: var(--spacing-36);
    `}
`;

export const ErrorLabel = styled.div`
  ${typography.p.small}
  color: var(--color-error);
  margin-block-start: var(--spacing-4);
`;

export const IconWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["color"].includes(prop),
})<StylingProps>`
  color: var(--color-main-default);
  position: absolute;
  right: var(--spacing-16);
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;

  ${({ color }) =>
    color &&
    css`
      color: ${color ? color : "var(--color-main-blue)"};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-text-light-grey);
      cursor: not-allowed;
    `}
`;
