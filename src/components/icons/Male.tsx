import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Male: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M20.2074 1.81518C20.1292 1.26845 19.6227 0.88855 19.076 0.966655L10.1664 2.23945C9.6197 2.31755 9.2398 2.82408 9.31791 3.37082C9.39601 3.91755 9.90255 4.29745 10.4493 4.21935L16.9689 3.28797L13.0629 8.496C12.0359 7.98384 10.8777 7.69574 9.65218 7.69574C5.426 7.69574 2 11.1217 2 15.3479C2 19.5741 5.426 23.0001 9.65218 23.0001C13.8784 23.0001 17.3044 19.5741 17.3044 15.3479C17.3044 13.0666 16.3061 11.0185 14.7225 9.6165L18.5689 4.48797L19.5002 11.0076C19.5784 11.5543 20.0849 11.9342 20.6316 11.8561C21.1784 11.778 21.5583 11.2715 21.4801 10.7247L20.2074 1.81518ZM15.3044 15.3479C15.3044 18.4695 12.7738 21.0001 9.65218 21.0001C6.53057 21.0001 4 18.4695 4 15.3479C4 12.2263 6.53057 9.69574 9.65218 9.69574C12.7738 9.69574 15.3044 12.2263 15.3044 15.3479Z"
      fill="currentColor"
    />
  </svg>
);

export default Male;
