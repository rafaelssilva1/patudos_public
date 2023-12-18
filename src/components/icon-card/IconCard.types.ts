import React from "react";

export type PropTypes = {
  data: {
    icon?: React.ReactNode;
    color?: string;
    title?: string;
    subtitle?: string;
    removePadding?: boolean;
  };
};

export type StylingProps = {
  color: string;
  removePadding?: boolean;
};
