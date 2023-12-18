import { IconTypes, Sizes } from "../button/Button.types";

export type PropTypes = {
  id: string;
  error?: string;
  showError?: boolean;
  label?: string;
  optionData?: {
    value: string;
    id: string;
  }[];
  showIcon?: boolean;
  icon?: IconTypes;
  size?: Sizes;
  isTyping?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type SelectStylingProps = {
  showError?: boolean;
  error?: string;
  showIcon?: boolean;
};
