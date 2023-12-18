type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

export type PropTypes = {
  src?: string;
  alt?: string;
  objectFit?: ObjectFit;
  styles?: {
    [key: string]: string | number;
  };
  priority?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export type StylingProps = {
  width?: string;
  height?: string;
  objectFit?: string;
  maxHeight?: string;
};
