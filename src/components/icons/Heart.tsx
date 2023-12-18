"use client";

import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Heart: React.FC<PropTypes> = ({
  size = Sizes.Default,
  filled = false,
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
      d="M17.8334 13.6667C19.0751 12.45 20.3334 10.9917 20.3334 9.08333C20.3334 7.86776 19.8505 6.70197 18.991 5.84243C18.1314 4.98289 16.9657 4.5 15.7501 4.5C14.2834 4.5 13.2501 4.91667 12.0001 6.16667C10.7501 4.91667 9.71675 4.5 8.25008 4.5C7.03451 4.5 5.86872 4.98289 5.00918 5.84243C4.14963 6.70197 3.66675 7.86776 3.66675 9.08333C3.66675 11 4.91675 12.4583 6.16675 13.6667L12.0001 19.5L17.8334 13.6667Z"
      stroke="#211F1F"
      fill={filled ? "black" : "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Heart;
