import type * as React from "react";
import { PropTypes, Sizes } from "./utils/icons.types";
import { sizeConverter } from "./utils/icons.utils";

const Star: React.FC<PropTypes> = ({ size = Sizes.Default, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeConverter(size)}
    height={sizeConverter(size)}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2881 2.20258C11.7324 1.96299 12.2675 1.96299 12.7118 2.20258C13.1244 2.42501 13.3089 2.83044 13.3873 3.00649C13.4841 3.22378 13.5828 3.50779 13.6875 3.80906L15.1847 8.11654L19.7441 8.20945C20.063 8.21592 20.3636 8.22201 20.6001 8.24688C20.7918 8.26703 21.2344 8.31729 21.5734 8.64089C21.9386 8.98946 22.1039 9.49835 22.0134 9.99499C21.9293 10.4561 21.6008 10.7569 21.4576 10.8859C21.2808 11.045 21.0412 11.2266 20.787 11.4193L17.153 14.1744L18.4736 18.5393C18.566 18.8445 18.6531 19.1323 18.7025 19.365C18.7426 19.5535 18.8316 19.99 18.6286 20.4124C18.4099 20.8674 17.977 21.1819 17.4767 21.2493C17.0122 21.3118 16.6246 21.0923 16.4577 20.9959C16.2517 20.877 16.005 20.7053 15.7433 20.5231L12 17.9183L8.25668 20.5231C7.99494 20.7053 7.74818 20.877 7.54221 20.9959C7.37531 21.0923 6.98768 21.3118 6.5232 21.2493C6.02287 21.1819 5.58999 20.8674 5.37133 20.4124C5.16833 19.99 5.2573 19.5535 5.29737 19.365C5.34682 19.1323 5.43392 18.8445 5.5263 18.5393L6.84685 14.1744L3.21286 11.4193C2.9587 11.2266 2.71909 11.045 2.54234 10.8859C2.39912 10.7569 2.07057 10.4561 1.98651 9.99499C1.89596 9.49835 2.0613 8.98946 2.42648 8.64089C2.7655 8.31729 3.20812 8.26703 3.39979 8.24688C3.63633 8.22201 3.93693 8.21592 4.25579 8.20945C4.26866 8.20919 4.28157 8.20893 4.2945 8.20867L8.81516 8.11654L10.2997 3.84561C10.304 3.8334 10.3082 3.82121 10.3124 3.80906C10.4171 3.50779 10.5158 3.22378 10.6126 3.0065C10.691 2.83044 10.8755 2.42501 11.2881 2.20258ZM12 5.04575L10.6586 8.90466C10.6549 8.91526 10.6508 8.92766 10.6461 8.94164C10.6013 9.07517 10.5083 9.35238 10.3211 9.57487C10.1638 9.7619 9.96322 9.90766 9.73674 9.99947C9.46731 10.1087 9.17493 10.1115 9.03409 10.1128C9.01935 10.1129 9.00627 10.1131 8.99505 10.1133L4.91051 10.1965L8.16605 12.6647C8.17499 12.6715 8.1855 12.6793 8.19734 12.6881C8.31049 12.7719 8.54541 12.946 8.69918 13.1927C8.82845 13.4001 8.90508 13.636 8.92241 13.8798C8.94303 14.1698 8.85531 14.4487 8.81306 14.583C8.80864 14.5971 8.80472 14.6096 8.80147 14.6203L7.61843 18.5307L10.9718 16.1972C10.981 16.1908 10.9917 16.1832 11.0037 16.1746C11.1184 16.0929 11.3566 15.9233 11.6388 15.8533C11.876 15.7945 12.1239 15.7945 12.3611 15.8533C12.6433 15.9233 12.8815 16.0929 12.9962 16.1746C13.0082 16.1832 13.0189 16.1908 13.0281 16.1972L16.3815 18.5307L15.1984 14.6203C15.1952 14.6096 15.1913 14.5971 15.1868 14.583C15.1446 14.4487 15.0569 14.1698 15.0775 13.8798C15.0948 13.636 15.1715 13.4001 15.3007 13.1927C15.4545 12.946 15.6894 12.7719 15.8026 12.688C15.8144 12.6793 15.8249 12.6715 15.8339 12.6647L19.0894 10.1965L15.0048 10.1133C14.9936 10.1131 14.9805 10.1129 14.9658 10.1128C14.825 10.1115 14.5326 10.1087 14.2632 9.99947C14.0367 9.90766 13.8361 9.7619 13.6788 9.57487C13.4916 9.35238 13.3986 9.07517 13.3538 8.94164C13.3492 8.92766 13.345 8.91526 13.3413 8.90466L12 5.04575Z"
      fill="currentColor"
    />
  </svg>
);

export default Star;
