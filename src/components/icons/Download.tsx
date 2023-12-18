import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Download: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M12 2C12.5523 2 13 2.44772 13 3V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.2929 11.7071C6.90237 11.3166 6.90237 10.6834 7.2929 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L11 12.5858V3C11 2.44772 11.4477 2 12 2ZM3 10C3.55229 10 4 10.4477 4 11V17.7992C4 18.3758 4.00078 18.748 4.02393 19.0314C4.04612 19.303 4.0838 19.4038 4.109 19.4532C4.20487 19.6414 4.35785 19.7944 4.54601 19.8902C4.59546 19.9154 4.69617 19.9531 4.96784 19.9753C5.25117 19.9984 5.62345 19.9992 6.2 19.9992H17.8C18.3766 19.9992 18.7488 19.9984 19.0322 19.9753C19.3038 19.9531 19.4045 19.9154 19.454 19.8902C19.6422 19.7944 19.7951 19.6414 19.891 19.4532C19.9162 19.4038 19.9539 19.303 19.9761 19.0314C19.9992 18.748 20 18.3758 20 17.7992V11C20 10.4477 20.4477 10 21 10C21.5523 10 22 10.4477 22 11V17.8378C22 18.3649 22 18.8197 21.9694 19.1942C21.9371 19.5896 21.8658 19.9828 21.673 20.3612C21.3854 20.9257 20.9265 21.3846 20.362 21.6722C19.9836 21.865 19.5904 21.9363 19.195 21.9686C18.8205 21.9993 18.3657 21.9992 17.8386 21.9992H6.16144C5.6343 21.9992 5.17954 21.9993 4.80497 21.9686C4.40963 21.9363 4.01641 21.865 3.63803 21.6722C3.07354 21.3846 2.6146 20.9257 2.32698 20.3612C2.13419 19.9828 2.06287 19.5896 2.03057 19.1942C1.99997 18.8197 1.99998 18.3649 2 17.8378L2 11C2 10.4477 2.44772 10 3 10Z"
      fill="currentColor"
    />
  </svg>
);

export default Download;
