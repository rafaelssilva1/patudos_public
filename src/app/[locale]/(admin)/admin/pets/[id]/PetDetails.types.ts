import { ColorsType } from "@base/app/api/colors/colors.types";
import { PetType } from "@base/app/api/pets/pets.types";
import { SizesType } from "@base/app/api/sizes/sizes.types";
import { StatusTypes } from "@base/app/api/status/status.types";

export type PropTypes = {
  data: {
    petDetailsData: PetType;
    colorsData: ColorsType;
    petStatusData: StatusTypes;
    sizesData: SizesType;
  };
  token: string;
  id: number;
};
