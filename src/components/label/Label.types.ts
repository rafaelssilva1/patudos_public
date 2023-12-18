import { MouseEventHandler } from "react";

export type StylingProps = {
  isTyping?: boolean;
  disabled?: boolean;
  required?: boolean;
  showError?: boolean;
  showIcon?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export type PropTypes = {
  isTyping?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLSelectElement>;
} & React.LabelHTMLAttributes<HTMLLabelElement>;
