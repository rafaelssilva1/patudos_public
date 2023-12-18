import {
  getAdoptionRequestDetails,
  getAdoptionStatus,
} from "@base/get-data-utils";
import { cookies } from "next/headers";
import RequestDetails from "./RequestDetails";

const RequestsDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const adoptionRequestsData = await getAdoptionRequestDetails({
    enableFetch: true,
    disableCache: true,
    token,
    id,
  });
  const adoptionStatusData = await getAdoptionStatus({
    enableFetch: true,
    token,
  });
  return (
    <RequestDetails
      data={{ adoptionRequestsData, adoptionStatusData }}
      token={token}
    />
  );
};

export default RequestsDetailsPage;
