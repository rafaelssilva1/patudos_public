import styled from "@emotion/styled";
import Heading from "@base/components/heading/Heading";
import { StylingProps } from "./IconCard.types";
import { css } from "@emotion/react";
import typography, { weight } from "@base/theme/typography.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 10rem;
  border-radius: var(--spacing-4);

  background-color: var(--color-bg-dark-grey);
  color: var(--color-white);
`;
export const IconWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["color", "removePadding"].includes(prop),
})<StylingProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.4rem;
  height: 3.4rem;

  padding: var(--spacing-8);
  margin-bottom: var(--spacing-10);

  ${({ removePadding }) =>
    removePadding &&
    css`
      padding: unset;
    `}

  ${({ color }) =>
    color &&
    css`
      background-color: ${color ?? "var(--color-bg-dark-grey)"};
    `}
  color: var(--color-bg-dark-grey);
  border-radius: 50%;
`;
export const Title = styled(Heading)`
  ${typography.p.default}
  font-size: 1.2rem;
  font-weight: ${weight.bold};
  text-align: center;
`;
export const Subtitle = styled.span`
  font-size: 1rem;
`;
