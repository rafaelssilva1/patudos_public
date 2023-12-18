import { ColorType } from "@base/app/api/colors/colors.types";
import { SizeType } from "@base/app/api/sizes/sizes.types";
import { StatusTypes } from "@base/app/api/status/status.types";
import { Dispatch, SetStateAction } from "react";

export type PropTypes = {
  onClose: () => void;
  isOpen: boolean;
  token: string;
  data: {
    colorsData: ColorType[];
    petStatusData: StatusTypes;
    sizesData: SizeType[];
  };
  newId: number;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
};
