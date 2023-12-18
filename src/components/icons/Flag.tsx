import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Flag: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M5.38513 2.52523C6.0653 2.24538 7.07131 2 8.5 2C10.0112 2 11.262 2.51482 12.3245 2.95217C12.3432 2.95988 12.3619 2.96756 12.3805 2.97521C13.4935 3.43312 14.4128 3.8 15.5 3.8C16.6963 3.8 17.4403 3.59537 17.8539 3.42521C18.0617 3.33971 18.1911 3.26087 18.2567 3.2159C18.2847 3.19675 18.3015 3.18341 18.3082 3.17787C18.5919 2.90599 19.0101 2.82481 19.3762 2.97345C19.7533 3.12656 20 3.49297 20 3.9V14.7C20 14.9603 19.8985 15.2104 19.717 15.3971L19 14.7C19.717 15.3971 19.7165 15.3976 19.716 15.3981L19.7149 15.3992L19.7128 15.4014L19.7081 15.4061L19.6978 15.4164C19.6904 15.4236 19.682 15.4317 19.6725 15.4405C19.6537 15.4581 19.6308 15.4787 19.6036 15.5017C19.5492 15.5478 19.4779 15.6036 19.3878 15.6653C19.2073 15.7891 18.9539 15.9353 18.6149 16.0748C17.9347 16.3547 16.9287 16.6 15.5 16.6C13.9888 16.6 12.738 16.0852 11.6755 15.6479C11.6568 15.6402 11.6381 15.6325 11.6195 15.6248C10.5065 15.1669 9.58716 14.8 8.5 14.8C7.30368 14.8 6.55969 15.0047 6.14611 15.1748C6.09222 15.197 6.0436 15.2187 6 15.2395V21C6 21.5523 5.55229 22 5 22C4.44772 22 4 21.5523 4 21V14.7011C4 14.7003 4 14.6996 4 14.6989V3.90002C4 3.63969 4.10152 3.38962 4.283 3.20296L5 3.90002C4.283 3.20296 4.28351 3.20243 4.28403 3.2019L4.28508 3.20082L4.28726 3.1986L4.29189 3.19392L4.30225 3.18363C4.30966 3.17637 4.31805 3.16831 4.32746 3.1595C4.3463 3.14189 4.36919 3.12134 4.39637 3.09831C4.45076 3.05224 4.52213 2.99643 4.6122 2.93467C4.7927 2.8109 5.04607 2.66473 5.38513 2.52523ZM6 4.4395V13.1129C6.63136 12.9321 7.45195 12.8 8.5 12.8C10.0112 12.8 11.262 13.3149 12.3245 13.7522C12.3432 13.7599 12.3619 13.7676 12.3805 13.7753C13.4935 14.2332 14.4128 14.6 15.5 14.6C16.6963 14.6 17.4403 14.3954 17.8539 14.2252C17.9078 14.2031 17.9564 14.1813 18 14.1605V5.48713C17.3686 5.66796 16.548 5.8 15.5 5.8C13.9888 5.8 12.738 5.28518 11.6755 4.84783C11.6568 4.84012 11.6381 4.83244 11.6195 4.82479C10.5065 4.36688 9.58716 4 8.5 4C7.30369 4 6.5597 4.20463 6.14612 4.3748C6.09223 4.39697 6.0436 4.41869 6 4.4395Z"
      fill="currentColor"
    />
  </svg>
);

export default Flag;
