"use client";

import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Paw: React.FC<PropTypes> = ({
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
      d="M11 6C12.1046 6 13 5.10457 13 4C13 2.89543 12.1046 2 11 2C9.89543 2 9 2.89543 9 4C9 5.10457 9.89543 6 11 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 18C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99999 10C9.6566 10 10.3068 10.1293 10.9134 10.3806C11.52 10.6319 12.0712 11.0002 12.5355 11.4645C12.9998 11.9288 13.3681 12.48 13.6194 13.0866C13.8707 13.6932 14 14.3434 14 15V18.5C13.9997 19.3365 13.6999 20.1452 13.1548 20.7796C12.6097 21.4141 11.8554 21.8324 11.0286 21.9587C10.2017 22.085 9.35695 21.9111 8.64729 21.4683C7.93763 21.0255 7.41001 20.3432 7.15999 19.545C6.73333 18.1683 5.83333 17.2667 4.45999 16.84C3.66218 16.5901 2.98016 16.0629 2.53735 15.3538C2.09455 14.6446 1.92021 13.8004 2.04588 12.9739C2.17155 12.1473 2.58893 11.3931 3.2225 10.8476C3.85607 10.3021 4.66396 10.0015 5.49999 10H8.99999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Paw;
