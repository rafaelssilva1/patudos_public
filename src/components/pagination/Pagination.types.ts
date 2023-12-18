import { MouseEventHandler } from "react";

export type PropTypes = {
  pageLength: number;
  handleClick: (page: number) => void;
  currentPage: string | null;
};

export type StylingProps = {
  currentPage: boolean;
};
