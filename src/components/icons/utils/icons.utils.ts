import { Sizes } from "./icons.types";

export const sizeConverter = (key: Sizes) => {
  switch (key) {
    case Sizes.Small:
      return 16;
    case Sizes.Logo:
      return 104;
    case Sizes.LogoSmall:
      return 56;
    default:
      return 24;
  }
};
