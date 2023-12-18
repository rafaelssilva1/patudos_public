"use client";

import { useEffect, useRef, useState } from "react";
import {
  BaseInput,
  Div,
  ErrorLabel,
  IconWrapper,
  InputWrapper,
} from "./Input.styles";
import { PropTypes } from "./Input.types";
import * as icons from "@base/components/icons";
import { IconsTypes, Sizes } from "@base/components/icons/utils/icons.types";
import { ChevronPosition } from "@base/components/icons/Chevron";
import Label from "@base/components/label/Label";

const Input: React.FC<PropTypes> = ({
  id,
  type,
  value,
  disabled,
  required,
  error,
  showError,
  label,
  showIcon,
  iconProps,
  onClick,
  currentValue,
  setCurrentValue,
  removeAnimation = false,
  alwaysOnTop = false,
  name,
  defaultValue,
  ...props
}) => {
  const { icon, color, size = Sizes.Small } = iconProps || {};

  const inputRef = useRef<HTMLInputElement>(null);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<
    string | number | readonly string[] | undefined
  >(inputRef.current?.value || currentValue || defaultValue);

  const IconComponent = (icons as unknown as IconsTypes)?.[
    icon || 0
  ] as React.ComponentType<{ position?: ChevronPosition; size?: Sizes }>;

  useEffect(() => {
    if (!!inputValue) setIsTyping(true);
  }, [inputValue]);

  return (
    <Div>
      <InputWrapper>
        <Label
          id={id}
          isTyping={(!removeAnimation && isTyping) || alwaysOnTop}
          disabled={disabled}
          required={required}
          htmlFor={name}
          label={label}
          onClick={() => {
            setIsTyping(true);
            inputRef.current?.focus();
          }}
        />
        <BaseInput
          role="input"
          ref={inputRef}
          id={id}
          type={type}
          isTyping={isTyping}
          value={(currentValue ?? inputValue) || ""}
          onClick={() => setIsTyping(true)}
          onFocus={() => setIsTyping(true)}
          onBlur={() => !inputValue && setIsTyping(false)}
          onChange={(e) => {
            setInputValue(e.target.value);
            setCurrentValue?.(e.target.value);
          }}
          disabled={disabled}
          showError={showError}
          showIcon={showIcon}
          name={name}
          {...props}
        />
        {showIcon && icon && (
          <IconWrapper
            color={color}
            disabled={disabled}
            onClick={onClick}
            role="icon"
          >
            <IconComponent size={size} />
          </IconWrapper>
        )}
      </InputWrapper>
      {showError && error && <ErrorLabel>{error}</ErrorLabel>}
    </Div>
  );
};

export default Input;
