import styled from "@emotion/styled";
import { StylingProps } from "./TabsHeader.types";
import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";

export const TabHeaderWrapper = styled("li", {
  shouldForwardProp: (prop: string): boolean =>
    !["disabled", "selectedTab", "id"].includes(prop),
})<StylingProps>`
  ${typography.p.large}
  color: var(--color-black);
  cursor: pointer;

  & hover {
    color: var(--color-main-default);
  }

  ${({ selectedTab, id }) =>
    selectedTab &&
    id &&
    id === selectedTab &&
    css`
      color: var(--color-main-default);
      border-bottom: 0.4rem solid var(--color-main-default);
      padding-bottom: 0.4rem;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-text-grey);
      cursor: not-allowed;
    `}
`;
