import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";

const Bank: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="-270 396 36 36"
    width="33"
    height="33"
    xmlSpace="preserve"
    fill="#006E90"
  >
    <g>
      <g>
        <rect x="-269" y="428.5" className="st0" width="34.1" height="1.5" />
        <g>
          <polygon
            className="st0"
            points="-265.3,411.4 -264,411.4 -264,423.2 -265.3,423.2 -265.3,424.7 -258.8,424.7 -258.8,423.2      -259.9,423.2 -259.9,411.4 -258.8,411.4 -258.8,409.8 -265.3,409.8    "
          />
          <polygon
            className="st0"
            points="-255.3,411.4 -254.1,411.4 -254.1,423.2 -255.3,423.2 -255.3,424.7 -248.8,424.7 -248.8,423.2      -249.8,423.2 -249.8,411.4 -248.8,411.4 -248.8,409.8 -255.3,409.8    "
          />
          <polygon
            className="st0"
            points="-238.8,411.4 -238.8,409.8 -245.3,409.8 -245.3,411.4 -244.1,411.4 -244.1,423.2 -245.3,423.2      -245.3,424.7 -238.8,424.7 -238.8,423.2 -239.9,423.2 -239.9,411.4    "
          />
        </g>
        <rect x="-266.9" y="425.9" className="st0" width="29.9" height="1.5" />
        <polygon
          className="st0"
          points="-252,398 -266.9,404.5 -266.9,408.7 -252,408.7 -237,408.7 -237,404.5   "
        />
      </g>
    </g>
  </svg>
);

export default Bank;
