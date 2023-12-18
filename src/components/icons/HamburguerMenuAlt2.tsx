import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const HamburguerMenuAlt2: React.FC<PropTypes> = ({
  size = Sizes.Default,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H9C9.55228 17 10 17.4477 10 18C10 18.5523 9.55228 19 9 19H4C3.44772 19 3 18.5523 3 18Z"
      fill="currentColor"
    />
  </svg>
);

export default HamburguerMenuAlt2;
