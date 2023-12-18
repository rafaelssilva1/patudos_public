import { AdoptionRequestsTypes } from "@base/app/api/adoptions/adoptions.types";
import { StatusTypes } from "@base/app/api/status/status.types";

export type PropTypes = {
  data: {
    adoptionRequestsData: AdoptionRequestsTypes;
    adoptionStatusData: StatusTypes;
  };
  token: string;
};
