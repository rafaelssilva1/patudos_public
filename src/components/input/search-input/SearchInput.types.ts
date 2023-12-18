import { IconTypes } from "@base/components/button/Button.types";

export type PropTypes = {
  error?: string;
  label?: string;
  showError?: boolean;
  showIcon?: boolean;
  iconProps?: {
    icon?: IconTypes;
    color?: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;
