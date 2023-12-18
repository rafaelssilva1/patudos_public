import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CheckboxVariant, InputTypes, StylingProps } from "./Checkbox.types";
import Label from "../label/Label";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;

  & label {
    left: var(--spacing-24);
    white-space: nowrap;
  }
`;

const checkboxTypeStyles = {
  [CheckboxVariant.Default]: css`
    left: 0.95rem;
    top: 0.6rem;
  `,
  [CheckboxVariant.Small]: css`
    left: 0.6rem;
    top: 0.4rem;
  `,
};

const checkedStyles = css`
  content: "";
  position: absolute;
  display: block;

  left: 0.95rem;
  top: 0.6rem;
  width: 0.5rem;
  height: 1rem;
  border: solid var(--color-white);
  border-width: 0 0.2rem 0.2rem 0;
  transform: rotate(45deg);
`;

const colorsToDisplay = (color: string) => {
  return css`
    background-color: ${color};
    border-color: ${color};
  `;
};

export const CheckboxInput = styled("input", {
  shouldForwardProp: (prop: string): boolean =>
    !["isChecked", "error", "variant"].includes(prop),
})<StylingProps>`
  width: 2.4rem;
  height: 2.4rem;
  appearance: none;
  border: 0.1rem solid var(--color-stroke-grey);
  border-radius: ${({ type }) =>
    type && type === InputTypes.Checkbox ? "0.6rem" : "50%"};

  ${({ variant }) =>
    variant === CheckboxVariant.Small &&
    css`
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0.4rem;
    `}

  &:hover {
    ${colorsToDisplay("var(--color-main-hover)")}

    &::after {
      ${checkedStyles}
      ${({ variant = CheckboxVariant.Default }) => checkboxTypeStyles[variant]};
    }
  }

  &:checked {
    ${colorsToDisplay("var(--color-main-default)")}

    &::after {
      ${checkedStyles}
      ${({ variant = CheckboxVariant.Default }) => checkboxTypeStyles[variant]};
    }
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${({ disabled, isChecked }) =>
    disabled &&
    css`
      cursor: not-allowed;
      ${colorsToDisplay("var(--color-text-light-grey)")}

      &:hover {
        ${colorsToDisplay("var(--color-text-light-grey)")}

        &::after {
          border: none;
        }
      }

      ${isChecked &&
      css`
        &:checked {
          ${colorsToDisplay("var(--color-text-light-grey)")}
          &::after {
            ${checkedStyles}
          }
        }
      `}
    `}

  ${({ error }) =>
    error &&
    css`
      ${colorsToDisplay("var(--color-error)")}

      &:hover, &:checked {
        ${colorsToDisplay("var(--color-error)")}
        &::after {
          content: "\\d7";
          border: none;
          color: var(--color-white);
          font-size: 1.6rem;
          top: 12.5%;
          left: 0.7rem;
          transform: translateY(0%);
          margin: auto;
        }
      }
      &::after {
        content: "\\d7";
        border: none;
        color: var(--color-white);
        font-size: 1.6rem;
        top: 12.5%;
        left: 0.7rem;
        transform: translateY(0%);
        margin: auto;
      }
    `}
`;

export const StyledLabel = styled(Label)`
  position: unset;
  top: unset;
  transform: unset;
`;
