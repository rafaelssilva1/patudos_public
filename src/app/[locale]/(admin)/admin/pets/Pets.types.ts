import { ColorType } from "@base/app/api/colors/colors.types";
import { PetTypes } from "@base/app/api/pets/pets.types";
import { SizeType } from "@base/app/api/sizes/sizes.types";
import { StatusTypes } from "@base/app/api/status/status.types";

export type PropTypes = {
  data: {
    petsData: PetTypes;
    colorsData: ColorType[];
    petStatusData: StatusTypes;
    sizesData: SizeType[];
  };
  token: string;
};
