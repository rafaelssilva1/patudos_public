import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StatusVariant } from "./Status.types";

const statusVariantBaseStyles = {
  [StatusVariant.Pendente]: css`
    background-color: var(--color-bg-light-blue);
    color: var(--color-main-default);
  `,
  [StatusVariant.EmAvaliação]: css`
    background-color: var(--color-bg-light-yellow);
    color: var(--color-orange);
  `,
  [StatusVariant.Aprovada]: css`
    background-color: var(--color-bg-light-green);
    color: var(--color-green);
  `,
  [StatusVariant.Recusada]: css`
    background-color: var(--color-bg-light-red);
    color: var(--color-red);
  `,
};

export const Wrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["idValue", "defaultStyles", "selectedStatus", "defaultSelected"].includes(
      prop,
    ),
})<{
  idValue: number;
  defaultStyles: boolean;
  selectedStatus?: string;
  defaultSelected?: boolean;
}>`
  border-radius: var(--spacing-8);
  padding: var(--spacing-4) var(--spacing-12);
  width: 100%;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-stroke-light-grey);
  color: var(--color-text-grey);

  ${({ idValue = StatusVariant.Pendente, defaultStyles }) =>
    defaultStyles && statusVariantBaseStyles[idValue as StatusVariant]}

  ${({ defaultStyles, selectedStatus, defaultSelected }) =>
    !defaultStyles &&
    defaultSelected &&
    statusVariantBaseStyles[selectedStatus as StatusVariant]};
`;

export const StyledText = styled.span`
  ${typography.p.small}
`;
