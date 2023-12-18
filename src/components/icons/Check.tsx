import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Check: React.FC<PropTypes> = ({
  size = Sizes.Default,
  color,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 24 24"
    fill={color ?? "currentColor"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.1508 5.74076C20.5701 6.10018 20.6187 6.73148 20.2593 7.15081L10.6175 18.3996L3.85984 12.7682C3.43556 12.4147 3.37824 11.7841 3.7318 11.3598C4.08537 10.9356 4.71593 10.8782 5.14021 11.2318L10.3826 15.6004L18.7408 5.84923C19.1002 5.4299 19.7315 5.38134 20.1508 5.74076Z"
      fill={color ?? "currentColor"}
    />
  </svg>
);

export default Check;
