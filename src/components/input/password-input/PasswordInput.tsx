"use client";

import { IconTypes } from "@base/components/button/Button.types";
import Input from "../base-input/Input";
import React, { useState } from "react";
import { PropTypes } from "../base-input/Input.types";

const PasswordInput: React.FC<PropTypes> = ({ id, ...props }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const icon = isVisible ? IconTypes.Eye : IconTypes.Plus;

  const iconProps = { icon, color: "var(--color-text-grey)" };

  return (
    <Input
      id={id}
      showIcon
      iconProps={iconProps}
      type={isVisible ? "text" : "password"}
      required
      onClick={() => setIsVisible((isVisible) => !isVisible)}
      {...props}
    />
  );
};

export default PasswordInput;
