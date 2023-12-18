import { JSXElementConstructor, ReactElement, ReactNodeArray } from "react";

export type PropTypes = {
  service: string;
  title: string;
  content:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | string
    | ReactNodeArray;
};
