import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Settings: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M5.5 7C4.67157 7 4 7.67157 4 8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5C7 7.67157 6.32843 7 5.5 7ZM2 8.5C2 6.567 3.567 5 5.5 5C7.08551 5 8.42479 6.05426 8.85506 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H8.85506C8.42479 10.9457 7.08551 12 5.5 12C3.567 12 2 10.433 2 8.5ZM18.5 14C17.6716 14 17 14.6716 17 15.5C17 16.3284 17.6716 17 18.5 17C19.3284 17 20 16.3284 20 15.5C20 14.6716 19.3284 14 18.5 14ZM15.1449 14.5C15.5752 13.0543 16.9145 12 18.5 12C20.433 12 22 13.567 22 15.5C22 17.433 20.433 19 18.5 19C16.9145 19 15.5752 17.9457 15.1449 16.5H3C2.44772 16.5 2 16.0523 2 15.5C2 14.9477 2.44772 14.5 3 14.5H15.1449Z"
      fill="currentColor"
    />
  </svg>
);

export default Settings;
