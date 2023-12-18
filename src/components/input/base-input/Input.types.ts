import { IconTypes } from "@base/components/button/Button.types";
import { Sizes } from "@base/components/icons/utils/icons.types";
import { Dispatch, SetStateAction } from "react";

export type PropTypes = {
  error?: string;
  label?: string;
  showError?: boolean;
  showIcon?: boolean;
  iconProps?: {
    icon?: IconTypes;
    color?: string;
    size?: Sizes;
  };
  currentValue?: string;
  setCurrentValue?: Dispatch<SetStateAction<string>>;
  removeAnimation?: boolean;
  alwaysOnTop?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type StylingProps = {
  isTyping?: boolean;
  disabled?: boolean;
  required?: boolean;
  showError?: boolean;
  showIcon?: boolean;
};
