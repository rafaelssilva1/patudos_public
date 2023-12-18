import { StatusType } from "@base/app/api/status/status.types";

export type PropTypes = {
  data: {
    id?: number;
    name?: string;
    pet_id: number;
    adoption_status: number;
    adoptionStatusName: StatusType | string;
  };
};
