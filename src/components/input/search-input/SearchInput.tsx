"use client";

import { IconTypes } from "@base/components/button/Button.types";
import Input from "../base-input/Input";
import { PropTypes } from "./SearchInput.types";
import { Sizes } from "@base/components/icons/utils/icons.types";
import { useState } from "react";

const SearchInput: React.FC<PropTypes> = ({ id, value, ...props }) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const icon = currentValue ? IconTypes.Close : IconTypes.Search;

  const iconProps = {
    icon,
    color: "var(--color-text-grey)",
    size: Sizes.Default,
  };

  const handleClick = () => currentValue && setCurrentValue("");

  return (
    <Input
      id={id}
      type="search"
      showIcon
      iconProps={iconProps}
      currentValue={currentValue}
      setCurrentValue={setCurrentValue}
      onClick={handleClick}
      {...props}
    />
  );
};

export default SearchInput;
