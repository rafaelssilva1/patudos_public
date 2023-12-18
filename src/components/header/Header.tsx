"use client";

import useViewport from "@base/hooks/useViewport";
import DesktopHeader from "./desktop/Header";
import MobileHeader from "./mobile/Header";
import React from "react";

const Header: React.FC = () => {
  const { viewport } = useViewport();
  const isMobile = viewport?.lteSmall;

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
