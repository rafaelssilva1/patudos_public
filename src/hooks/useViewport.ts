import { useState, useEffect } from "react";

import * as media from "@base/theme/custom-media";

type Viewport = {
  extraSmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  gteSmall: boolean;
  gteMedium: boolean;
  lteSmall: boolean;
  lteSmallTablet: boolean;
  lteMedium: boolean;
};

const useViewport = () => {
  const [viewport, setViewport] = useState<Viewport>();

  const handleViewport = () => {
    const extraSmall = window.matchMedia(media.extraSmall).matches;
    const small = window.matchMedia(media.small).matches;
    const medium = window.matchMedia(media.medium).matches;
    const large = window.matchMedia(media.large).matches;
    const gteSmall = window.matchMedia(media.gteSmall).matches;
    const gteMedium = window.matchMedia(media.gteMedium).matches;
    const lteSmall = window.matchMedia(media.lteSmall).matches;
    const lteSmallTablet = window.matchMedia(media.lteSmallTablet).matches;
    const lteMedium = window.matchMedia(media.lteMedium).matches;

    setViewport({
      extraSmall,
      small,
      medium,
      large,
      gteSmall,
      gteMedium,
      lteSmall,
      lteSmallTablet,
      lteMedium,
    });
  };

  useEffect(() => {
    handleViewport();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleViewport);

    return () => {
      window.removeEventListener("resize", handleViewport);
    };
  }, []);

  return { viewport };
};

export default useViewport;
