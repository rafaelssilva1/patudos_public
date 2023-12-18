import multilineOverflow from "@base/theme/multilineOverflow";
import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BaseTextArea = styled("textarea", {
  shouldForwardProp: (prop: string): boolean =>
    !["displayEllipsis"].includes(prop),
})<{ rows: number; displayEllipsis: boolean }>`
  width: 100%;
  height: auto;
  ${typography.p.large}
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
    height: auto;
  }

  ${({ rows, displayEllipsis }) =>
    displayEllipsis &&
    css`
      ${multilineOverflow({ maxLines: rows })}
    `}
`;
