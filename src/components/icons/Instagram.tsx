import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Instagram: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
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
      d="M7.39108 3.53229C5.25989 3.53229 3.53223 5.25995 3.53223 7.39114V16.6088C3.53223 18.74 5.25989 20.4677 7.39108 20.4677H16.6088C18.74 20.4677 20.4676 18.74 20.4676 16.6088V7.39114C20.4676 5.25995 18.74 3.53229 16.6088 3.53229H7.39108ZM2.03223 7.39114C2.03223 4.43153 4.43147 2.03229 7.39108 2.03229H16.6088C19.5684 2.03229 21.9676 4.43153 21.9676 7.39114V16.6088C21.9676 19.5685 19.5684 21.9677 16.6088 21.9677H7.39108C4.43147 21.9677 2.03223 19.5685 2.03223 16.6088V7.39114ZM12.4707 9.05488C11.8596 8.96426 11.2355 9.06864 10.6871 9.35317C10.1388 9.6377 9.69408 10.0879 9.41633 10.6397C9.13858 11.1915 9.04191 11.8169 9.14005 12.4268C9.2382 13.0367 9.52617 13.6002 9.963 14.037C10.3998 14.4739 10.9633 14.7618 11.5732 14.86C12.1832 14.9581 12.8085 14.8614 13.3603 14.5837C13.9121 14.3059 14.3623 13.8613 14.6469 13.3129C14.9314 12.7646 15.0358 12.1405 14.9451 11.5294C14.8527 10.906 14.5623 10.3289 14.1167 9.88336C13.6711 9.43777 13.094 9.14731 12.4707 9.05488ZM9.99625 8.02173C10.8246 7.59189 11.7675 7.4342 12.6907 7.5711C13.6324 7.71074 14.5042 8.14954 15.1773 8.8227C15.8505 9.49585 16.2893 10.3677 16.4289 11.3093C16.5658 12.2325 16.4081 13.1754 15.9783 14.0038C15.5485 14.8322 14.8683 15.504 14.0347 15.9235C13.2011 16.3431 12.2563 16.4892 11.3349 16.3409C10.4135 16.1926 9.56227 15.7576 8.90234 15.0977C8.24241 14.4378 7.80738 13.5865 7.65911 12.6651C7.51083 11.7437 7.65688 10.799 8.07648 9.96532C8.49607 9.13168 9.16784 8.45157 9.99625 8.02173ZM17.0698 6.18026C16.6555 6.18026 16.3198 6.51604 16.3198 6.93026C16.3198 7.34447 16.6555 7.68026 17.0698 7.68026H17.0786C17.4928 7.68026 17.8286 7.34447 17.8286 6.93026C17.8286 6.51604 17.4928 6.18026 17.0786 6.18026H17.0698Z"
      fill="currentColor"
    />
  </svg>
);

export default Instagram;
