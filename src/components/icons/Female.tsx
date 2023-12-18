import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Female: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M12.0661 12.1321C14.864 12.1321 17.1321 9.86396 17.1321 7.06605C17.1321 4.26815 14.864 2 12.0661 2C9.26815 2 7 4.26815 7 7.06605C7 9.86396 9.26815 12.1321 12.0661 12.1321ZM19.1321 7.06605C19.1321 10.689 16.4056 13.675 12.8925 14.0843L12.8881 17.5483H15.1574C15.7097 17.5483 16.1574 17.9961 16.1574 18.5483C16.1574 19.1006 15.7097 19.5483 15.1574 19.5483H12.8855L12.8823 22.0826C12.8816 22.6349 12.4333 23.0821 11.881 23.0814C11.3287 23.0807 10.8816 22.6324 10.8823 22.0801L10.8855 19.5483H8.53296C7.98067 19.5483 7.53296 19.1006 7.53296 18.5483C7.53296 17.9961 7.98067 17.5483 8.53296 17.5483H10.8881L10.8926 14.0351C7.5486 13.4762 5 10.5687 5 7.06605C5 3.16358 8.16358 0 12.0661 0C15.9685 0 19.1321 3.16358 19.1321 7.06605Z"
      fill="currentColor"
    />
  </svg>
);

export default Female;
