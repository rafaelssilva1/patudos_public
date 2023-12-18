import styled from "@emotion/styled";
import { StylingProps } from "./Pagination.types";
import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";
import Button from "@base/components/button/Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
`;

export const IconWrapper = styled.div`
  width: 3.8rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
  color: var(--color-main-default);

  cursor: pointer;
`;

export const StyledPageNumber = styled(Button, {
  shouldForwardProp: (prop: string): boolean => !["currentPage"].includes(prop),
})<StylingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.p.default};
  color: var(--color-text-dark-grey);
  border-radius: 50%;
  padding: var(--spacing-12);
  border: 0.1rem solid var(--color-main-default);
  width: 3.8rem;
  height: 3.8rem;

  ${({ currentPage }) =>
    currentPage &&
    css`
      background-color: var(--color-main-default);
      color: var(--color-white);
    `}

  cursor: pointer;
`;
