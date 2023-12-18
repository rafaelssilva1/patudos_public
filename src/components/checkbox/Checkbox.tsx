"use client";

import { CheckboxInput, Wrapper, StyledLabel } from "./Checkbox.styles";
import { CheckboxVariant, InputTypes, PropTypes } from "./Checkbox.types";
import { useEffect, useState } from "react";

const Checkbox: React.FC<PropTypes> = ({
  id,
  value,
  error,
  checked = false,
  disabled,
  name,
  label,
  type = InputTypes.Checkbox,
  resetOnChange = false,
  variant = CheckboxVariant.Default,
  onClick,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    if (resetOnChange) {
      setIsChecked(false);
    }
  }, [resetOnChange]);

  if (!label) return null;

  return (
    <Wrapper onClick={onClick}>
      <CheckboxInput
        id={id}
        type={type}
        value={value}
        name={name}
        disabled={disabled}
        onChange={() => setIsChecked((prev) => !prev)}
        defaultChecked={isChecked}
        isChecked={isChecked}
        error={error}
        variant={variant}
        {...props}
      />
      <StyledLabel id={id} label={label} disabled={disabled} {...props} />
    </Wrapper>
  );
};

export default Checkbox;
