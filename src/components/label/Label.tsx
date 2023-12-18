"use client";

import { BaseLabel } from "./Label.styles";
import { PropTypes } from "./Label.types";

const Label: React.FC<PropTypes> = ({
  id,
  isTyping,
  disabled,
  required,
  onClick,
  label,
  ...props
}) => {
  return (
    <BaseLabel
      htmlFor={id}
      isTyping={isTyping}
      disabled={disabled}
      required={required}
      onClick={() => !disabled && onClick}
      {...props}
    >
      {label}
    </BaseLabel>
  );
};

export default Label;
