"use client";

import Image from "next/image";
import { PropTypes } from "./Image.types";

const ResponsiveImage: React.FC<PropTypes> = ({
  src,
  alt,
  sizes = "100%",
  objectFit = "cover",
  styles,
  loading,
  priority = false,
}) => {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      sizes={sizes}
      style={{ ...styles, objectFit: objectFit }}
      loading={loading}
      priority={priority}
    />
  );
};

export default ResponsiveImage;
