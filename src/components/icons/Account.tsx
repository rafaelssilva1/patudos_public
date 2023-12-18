import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Account: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M12 4C7.58172 4 4 7.58172 4 12C4 14.2564 4.93414 16.2946 6.43678 17.749C7.32719 15.5504 9.48213 14 12 14C14.5179 14 16.6728 15.5504 17.5632 17.749C19.0659 16.2946 20 14.2564 20 12C20 7.58172 16.4183 4 12 4ZM15.8744 19.0009C15.431 17.2756 13.8639 16 12 16C10.1361 16 8.56904 17.2756 8.12559 19.0009C9.27347 19.6375 10.5944 20 12 20C13.4056 20 14.7265 19.6375 15.8744 19.0009ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z"
      fill="currentColor"
    />
  </svg>
);

export default Account;
