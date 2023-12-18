import { PetImageType } from "@base/app/api/pets/pets.types";

export type PropTypes = {
  data?: {
    title: string;
    subtitle: string;
    message: string;
    image: string;
    url: string;
  }[];
  alt?: string;
  largestContentfulPaint?: number;
};
