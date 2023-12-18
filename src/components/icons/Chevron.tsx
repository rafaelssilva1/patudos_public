import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

export enum ChevronPosition {
  Up = "180deg",
  Right = "270deg",
  Down = "0deg",
  Left = "90deg",
}

type PropsTypes = {
  position?: ChevronPosition;
} & PropTypes;

const Chevron: React.FC<PropsTypes> = ({
  position = ChevronPosition.Down,
  size = Sizes.Default,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ rotate: position }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16Z"
      fill="currentColor"
    />
  </svg>
);

export default Chevron;
