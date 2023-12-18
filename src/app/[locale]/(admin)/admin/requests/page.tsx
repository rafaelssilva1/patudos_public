import { cookies } from "next/headers";
import Requests from "./Requests";
import { ADOPTION_REQUESTS_RENDER_LIMIT } from "@base/utils/global-variables";
import { getAdoptionRequests, getAdoptionStatus } from "@base/get-data-utils";

const RequestsPage: React.FC = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const page = searchParams?.page ? Number(searchParams?.page) : 1;

  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const adoptionRequestsData = await getAdoptionRequests({
    enableFetch: true,
    disableCache: true,
    limit: page * ADOPTION_REQUESTS_RENDER_LIMIT,
    token,
  });
  const adoptionStatusData = await getAdoptionStatus({
    enableFetch: true,
    token,
  });

  return (
    <Requests
      data={{ adoptionRequestsData, adoptionStatusData }}
      token={token}
    />
  );
};

export default RequestsPage;
