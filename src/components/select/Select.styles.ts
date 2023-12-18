import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import Label from "../label/Label";
import { StylingProps } from "../label/Label.types";
import { css } from "@emotion/react";
import { SelectStylingProps } from "./Select.types";

export const BaseSelect = styled("select", {
  shouldForwardProp: (prop: string): boolean =>
    !["showError", "error", "showIcon"].includes(prop),
})<SelectStylingProps>`
  min-width: 12rem;
  width: 100%;
  height: 4rem;
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-0);
  text-indent: var(--spacing-8);
  ${typography.p.large}

  border: 0.1rem solid var(--color-stroke-grey);
  border-radius: var(--spacing-10);

  background-color: var(--color-white);
  color: var(--color-full-black);
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

  ${({ showError, error }) =>
    showError &&
    error &&
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
      text-indent: var(--spacing-32);
    `}
`;

export const StyledLabel = styled(Label, {
  shouldForwardProp: (prop: string): boolean =>
    !["isTyping", "showIcon"].includes(prop),
})<StylingProps>`
  padding-inline-start: var(--spacing-4);
  pointer-events: none;

  ${({ showIcon }) =>
    showIcon &&
    css`
      padding-inline-start: var(--spacing-28);
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  position: absolute;
  left: 1.2rem;
  color: var(--color-main-default);
`;

export const ErrorLabel = styled.div`
  ${typography.p.small}
  color: var(--color-error);
  margin-block-start: var(--spacing-4);
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
`;
