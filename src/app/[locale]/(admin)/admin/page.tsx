import { cookies } from "next/headers";
import Admin from "./Admin";
import verifyJwtToken from "@base/utils/verifyJwtToken";
import {
  getAdoptionRequests,
  getAdoptionStatus,
  getPets,
} from "@base/get-data-utils";
import { ADOPTION_REQUESTS_RENDER_LIMIT } from "@base/utils/global-variables";

const AdminPage = async () => {
  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const verifyToken = verifyJwtToken({ token });

  const petsData = await getPets({
    enableFetch: true,
    locale: "pt",
    limit: ADOPTION_REQUESTS_RENDER_LIMIT,
  });

  const adoptionRequestsData = await getAdoptionRequests({
    enableFetch: true,
    disableCache: true,
    limit: ADOPTION_REQUESTS_RENDER_LIMIT,
    token,
  });

  const adoptionStatusData = await getAdoptionStatus({
    enableFetch: true,
    token,
  });

  return (
    <Admin
      isUserLoggedIn={!!verifyToken}
      data={{ petsData, adoptionRequestsData, adoptionStatusData }}
    />
  );
};

export default AdminPage;
