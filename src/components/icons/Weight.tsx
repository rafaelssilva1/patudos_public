import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Weight: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M19.7201 19.7124L23.346 10.0432L26.972 19.7124C25.9205 20.498 24.6514 20.9211 23.346 20.9211C22.0407 20.9211 20.7716 20.498 19.7201 19.7124Z"
      stroke="white"
      strokeWidth="1.52672"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.79895 19.7124L6.4249 10.0432L10.0509 19.7124C8.99933 20.498 7.73025 20.9211 6.4249 20.9211C5.11956 20.9211 3.85048 20.498 2.79895 19.7124Z"
      stroke="white"
      strokeWidth="1.52672"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.84229 25.7556H20.9288"
      stroke="white"
      strokeWidth="1.52672"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8855 4V25.7557"
      stroke="white"
      strokeWidth="1.52672"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.00769 8.83478H6.42499C8.8423 8.83478 12.4683 7.62613 14.8856 6.41748C17.3029 7.62613 20.9288 8.83478 23.3461 8.83478H25.7634"
      stroke="white"
      strokeWidth="1.52672"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Weight;
