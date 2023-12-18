"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BaseSelect,
  ErrorLabel,
  IconWrapper,
  SelectWrapper,
  StyledLabel,
  Wrapper,
} from "./Select.styles";
import { PropTypes } from "./Select.types";
import { IconsTypes, Sizes } from "../icons/utils/icons.types";
import * as icons from "@base/components/icons";
import { ChevronPosition } from "../icons/Chevron";

const Select: React.FC<PropTypes> = ({
  id,
  label,
  optionData,
  error,
  showError,
  children,
  showIcon = true,
  icon,
  isTyping = false,
  defaultValue,
  size = Sizes.Small,
  required,
  ...props
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const [selectValue, setSelectValue] = useState<string | undefined>(
    defaultValue?.toString(),
  );
  const [isSelected, setIsSelected] = useState<boolean>(isTyping);

  useEffect(() => {
    setSelectValue(String(defaultValue));
  }, [defaultValue]);

  const IconComponent = (icons as unknown as IconsTypes)?.[
    icon || 0
  ] as React.ComponentType<{ position?: ChevronPosition; size: Sizes }>;

  return (
    <Wrapper>
      <SelectWrapper>
        {showIcon && icon && (
          <IconWrapper onClick={() => selectRef.current?.focus()}>
            <IconComponent size={size} />
          </IconWrapper>
        )}
        <StyledLabel
          id={id}
          label={label}
          isTyping={isSelected}
          onClick={() => selectRef.current?.focus()}
          showIcon={showIcon}
          required={required}
        />
        <BaseSelect
          id={id}
          ref={selectRef}
          onFocus={() => setIsSelected(true)}
          onBlur={() => !selectValue && setIsSelected(false)}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          onClick={() => selectRef.current?.focus()}
          error={error}
          showError={showError}
          showIcon={showIcon}
          defaultValue={defaultValue}
          {...props}
        >
          {label && <option id={label}> </option>}
          {children ??
            optionData?.map(({ value }) => (
              <option key={value} id={value}>
                {value}
              </option>
            ))}
        </BaseSelect>
      </SelectWrapper>
      {showError && error && <ErrorLabel>{error}</ErrorLabel>}
    </Wrapper>
  );
};

export default Select;
