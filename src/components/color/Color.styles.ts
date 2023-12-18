import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["color"].includes(prop),
})<{ color: string }>`
  ${({ color }) => css`
    background-color: ${color};
    border: 0.05rem solid var(--color-full-black);
    border-radius: 50%;
    width: 2.1rem;
    height: 2.1rem;
  `}
`;
