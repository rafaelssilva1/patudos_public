import Button from "@base/components/button/Button";
import Modal from "@base/components/modal/Modal";
import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-16);
  margin-block: var(--spacing-16) var(--spacing-32);
  width: 100%;
`;

export const StyledText = styled.span`
  ${typography.p.large};
`;

export const ColorDrop = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["backgroundColor"].includes(prop),
})<{ backgroundColor: string }>`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.1rem solid var(--color-full-black);

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const ItemsContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-32);
  flex-wrap: wrap;
`;

export const StyledModal = styled(Modal)`
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-full-black);
  padding: var(--spacing-60);

  & svg {
    color: var(--color-full-black);
  }
`;

export const StyledForm = styled.form`
  margin-block: var(--spacing-24);
`;
