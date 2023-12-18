"use client";

import React from "react";
import { BaseButton } from "./Button.styles";
import { IconPosition, PropTypes, Sizes } from "./Button.types";
import { ChevronPosition } from "../icons/Chevron";
import * as icons from "@base/components/icons";
import { IconsTypes } from "../icons/utils/icons.types";

const Button: React.FC<PropTypes> = ({
  variant,
  size = Sizes.Default,
  icon,
  iconPosition = IconPosition.Left,
  children,
  onClick,
  ...props
}) => {
  const IconComponent = (icons as unknown as IconsTypes)?.[
    icon || 0
  ] as React.ComponentType<{ position?: ChevronPosition; size: Sizes }>;

  const hasChildren = !!children;

  if (!hasChildren && !icon) {
    return null;
  }

  return (
    <BaseButton
      size={size}
      variant={variant}
      icon={icon}
      iconPosition={iconPosition}
      hasChildren={hasChildren}
      onClick={onClick}
      {...props}
    >
      {iconPosition && icon && iconPosition === IconPosition.Left && (
        <IconComponent position={ChevronPosition.Left} size={size} />
      )}

      {children}

      {iconPosition && icon && iconPosition === IconPosition.Right && (
        <IconComponent position={ChevronPosition.Right} size={size} />
      )}
    </BaseButton>
  );
};

export default Button;
