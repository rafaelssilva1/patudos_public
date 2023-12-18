import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Message: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M3 21L4.9 15.3C3.99713 13.4948 3.76612 11.4272 4.2483 9.46722C4.73049 7.50725 5.8944 5.78282 7.53176 4.60254C9.16911 3.42226 11.173 2.86316 13.1849 3.02528C15.1968 3.1874 17.0854 4.06017 18.5126 5.48741C19.9398 6.91464 20.8126 8.80319 20.9747 10.8151C21.1369 12.827 20.5777 14.8309 19.3975 16.4683C18.2172 18.1056 16.4928 19.2695 14.5328 19.7517C12.5728 20.2339 10.5052 20.0029 8.7 19.1L3 21Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Message;
