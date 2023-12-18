import { AdoptionRequestsType } from "@base/app/api/adoptions/adoptions.types";
import { StatusTypes } from "@base/app/api/status/status.types";

export type PropTypes = {
  data: AdoptionRequestsType;
  adoptionStatusData?: StatusTypes;
  token: string;
};
