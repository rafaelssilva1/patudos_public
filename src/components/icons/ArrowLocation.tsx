import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const ArrowLocation: React.FC<PropTypes> = ({
  size = Sizes.Default,
  ...props
}) => (
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
      d="M19.6525 4.06269C19.326 4.1622 18.8837 4.34017 18.21 4.61284L5.66741 9.68962C4.98394 9.96627 4.53377 10.1495 4.22595 10.3063C4.1096 10.3656 4.03927 10.4091 3.99961 10.4359C4.04037 10.4609 4.11251 10.5014 4.23128 10.5556C4.54552 10.6992 5.00311 10.8629 5.69778 11.1101L9.83857 12.5835C9.85644 12.5899 9.87483 12.5963 9.89367 12.603C10.0976 12.6749 10.3544 12.7653 10.5791 12.9217C10.7738 13.0572 10.9428 13.2262 11.0783 13.4209C11.2347 13.6456 11.3252 13.9024 11.397 14.1063C11.4037 14.1252 11.4102 14.1436 11.4165 14.1615L12.8899 18.3022C13.1371 18.9969 13.3009 19.4545 13.4444 19.7687C13.4986 19.8875 13.5391 19.9596 13.5642 20.0004C13.5909 19.9608 13.6345 19.8904 13.6937 19.7741C13.8506 19.4663 14.0338 19.0161 14.3104 18.3326L19.3872 5.78998C19.6599 5.11632 19.8378 4.67406 19.9373 4.34753C19.9861 4.18741 20.0012 4.09853 20.0063 4.05921C19.9902 4.03231 19.9677 4.00979 19.9408 3.99369C19.9015 3.99881 19.8126 4.01389 19.6525 4.06269ZM19.0695 2.14955C19.4725 2.02674 20.003 1.90409 20.5268 2.07614C21.188 2.29337 21.7067 2.812 21.9239 3.47326C22.0959 3.99698 21.9733 4.52756 21.8505 4.93055C21.7218 5.35288 21.5089 5.87871 21.2588 6.49668L16.1467 19.1263C15.8924 19.7547 15.677 20.2871 15.4758 20.682C15.2895 21.0476 15.0054 21.5342 14.5016 21.7848C13.8841 22.092 13.1551 22.0765 12.5513 21.7431C12.0587 21.4712 11.7956 20.9729 11.6252 20.5996C11.4411 20.1965 11.2485 19.6555 11.0213 19.0169L9.53225 14.8319C9.48215 14.6911 9.45666 14.6204 9.43573 14.5699C9.43516 14.5685 9.43461 14.5672 9.43408 14.5659C9.43282 14.5654 9.4315 14.5649 9.43013 14.5643C9.37965 14.5434 9.3089 14.5179 9.16811 14.4678L4.9832 12.9787C4.3446 12.7515 3.80349 12.559 3.40038 12.3749C3.02716 12.2044 2.52884 11.9413 2.25689 11.4487C1.92357 10.8449 1.90798 10.1159 2.21519 9.49842C2.46583 8.99462 2.95246 8.71049 3.31805 8.52424C3.71292 8.32307 4.2453 8.1076 4.87359 7.85331L17.5034 2.74126C18.1213 2.49111 18.6471 2.27826 19.0695 2.14955Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowLocation;
