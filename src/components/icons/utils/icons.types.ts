import { ComponentType } from "react";

export enum Sizes {
  Default = "Default",
  Small = "Small",
  Logo = "Logo",
  LogoSmall = "LogoSmall",
}

export type PropTypes = {
  size?: Sizes;
  filled?: boolean;
  bgColor?: string;
  onClick?: () => void;
  checked?: boolean;
  checkbox?: {
    bgColor: string;
    stroke: string;
  };
  isInverted?: boolean;
  color?: string;
};

export type IconsTypes = {
  [x: string]: ComponentType;
};
