import styled from "@emotion/styled";
import { Close } from "../icons";
import { StylingProps } from "./MultipleSelect.types";
import typography from "@base/theme/typography.styles";

export const Wrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["raised"].includes(prop),
})<Partial<StylingProps>>`
  width: inherit;
  height: auto;
  display: flex;
  margin-inline-end: var(--spacing-16);

  ${typography.p.default}
  margin-bottom: var(--spacing-8);
  background-color: var(--color-white);
  box-shadow: ${({ raised }) =>
    raised ? "0.6rem 0.5rem 2.2rem -0.8rem rgba(0,0,0,0.76)" : "none"};
  padding: 1rem;
  border-radius: 0.6rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  position: relative;
  min-height: 3.2rem;
`;

export const SelectIcon = styled.span`
  display: flex;
  width: 2rem;
`;

export const Chip = styled.span`
  display: flex;
  align-items: center;

  background-color: var(--color-main-default);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--spacing-4);
  margin: var(--spacing-4);
  & > span {
    margin-right: var(--spacing-8);
    display: flex;
    align-items: center;
  }
  color: var(--color-white);
`;

export const DropDown = styled("ul", {
  shouldForwardProp: (prop: string): boolean =>
    !["opened", "wrapperClientHeight", "raised"].includes(prop),
})<StylingProps>`
  position: absolute;
  top: ${({ wrapperClientHeight }) => (wrapperClientHeight + 2) / 10}rem;
  left: 0;
  height: inherit;
  color: var(--color-black);
  ${typography.p.small}

  background-color: var(--color-white);
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  width: 100%;
  box-shadow: ${({ raised }) =>
    raised ? "0.6rem 0.5rem 2.2rem -0.8rem rgba(0,0,0,0.76)" : "none"};
  border-radius: var(--spacing-6);
  padding: var(--spacing-6);
  transition: all 0.2s linear 0.1s;
  z-index: var(--index-default);
`;

export const StyledLi = styled.li`
  list-style: none;
  padding: var(--spacing-8);
  border-radius: var(--spacing-4);

  &:hover {
    background-color: var(--color-main-hover);
    color: var(--color-white);
  }
`;

export const StyledCloseIcon = styled(Close)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const StyledPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--spacing-8);
  transition: transform 0.2s ease-out;
`;
