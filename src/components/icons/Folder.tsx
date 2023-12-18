import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Folder: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M10.405 6.02761C10.3167 6.00641 10.2113 5.99998 9.67452 5.99998H6.2C5.62345 5.99998 5.25117 6.00076 4.96784 6.02391C4.69617 6.0461 4.59546 6.08378 4.54601 6.10897C4.35785 6.20485 4.20487 6.35783 4.109 6.54599C4.0838 6.59543 4.04612 6.69615 4.02393 6.96782C4.00078 7.25115 4 7.62343 4 8.19998V15.8C4 16.3765 4.00078 16.7488 4.02393 17.0321C4.04612 17.3038 4.0838 17.4045 4.109 17.454C4.20487 17.6421 4.35785 17.7951 4.54601 17.891C4.59546 17.9162 4.69617 17.9539 4.96784 17.9761C5.25117 17.9992 5.62345 18 6.2 18H17.8C18.3766 18 18.7488 17.9992 19.0322 17.9761C19.3038 17.9539 19.4045 17.9162 19.454 17.891C19.6422 17.7951 19.7951 17.6421 19.891 17.454C19.9162 17.4045 19.9539 17.3038 19.9761 17.0321C19.9992 16.7488 20 16.3765 20 15.8V10.2C20 9.62343 19.9992 9.25115 19.9761 8.96782C19.9539 8.69615 19.9162 8.59543 19.891 8.54599C19.7951 8.35783 19.6422 8.20485 19.454 8.10897C19.4045 8.08378 19.3038 8.0461 19.0322 8.02391C18.7488 8.00076 18.3766 7.99998 17.8 7.99998H14.3255C14.2975 7.99998 14.2697 8.00001 14.2422 8.00003C13.8353 8.00041 13.4765 8.00074 13.1281 7.91709C12.822 7.8436 12.5294 7.72239 12.2609 7.5579C11.9554 7.37067 11.702 7.11676 11.4145 6.82877C11.395 6.80928 11.3754 6.78963 11.3556 6.76983L11.2302 6.64435C10.8506 6.26479 10.7715 6.1948 10.6941 6.14734C10.6046 6.09251 10.5071 6.05211 10.405 6.02761ZM9.75782 3.99993C10.1647 3.99955 10.5235 3.99922 10.8719 4.08287C11.178 4.15636 11.4707 4.27757 11.7391 4.44206C12.0446 4.62929 12.298 4.8832 12.5855 5.17119C12.605 5.19068 12.6246 5.21033 12.6444 5.23013L12.7699 5.35562C13.1494 5.73517 13.2285 5.80516 13.3059 5.85262C13.3954 5.90745 13.4929 5.94785 13.595 5.97235C13.6833 5.99355 13.7887 5.99998 14.3255 5.99998L17.8385 5.99998C18.3657 5.99996 18.8205 5.99995 19.195 6.03055C19.5904 6.06285 19.9836 6.13417 20.362 6.32696C20.9265 6.61458 21.3854 7.07352 21.673 7.63801C21.8658 8.01639 21.9371 8.40961 21.9694 8.80495C22 9.17952 22 9.63427 22 10.1614V15.8385C22 16.3657 22 16.8204 21.9694 17.195C21.9371 17.5904 21.8658 17.9836 21.673 18.362C21.3854 18.9264 20.9265 19.3854 20.362 19.673C19.9836 19.8658 19.5904 19.9371 19.195 19.9694C18.8205 20 18.3657 20 17.8385 20H6.16148C5.63432 20 5.17955 20 4.80497 19.9694C4.40963 19.9371 4.01641 19.8658 3.63803 19.673C3.07354 19.3854 2.6146 18.9264 2.32698 18.362C2.13419 17.9836 2.06287 17.5904 2.03057 17.195C1.99997 16.8204 1.99998 16.3657 2 15.8385V8.16144C1.99998 7.63429 1.99997 7.17952 2.03057 6.80495C2.06287 6.40961 2.13419 6.01639 2.32698 5.63801C2.6146 5.07352 3.07354 4.61458 3.63803 4.32696C4.01641 4.13417 4.40963 4.06285 4.80497 4.03055C5.17955 3.99995 5.63431 3.99996 6.16146 3.99998L9.67452 3.99998C9.70252 3.99998 9.73028 3.99995 9.75782 3.99993Z"
      fill="currentColor"
    />
  </svg>
);

export default Folder;
