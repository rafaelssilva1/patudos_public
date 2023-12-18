import { cookies } from "next/headers";
import {
  getColorDetails,
  getPetDetails,
  getPetStatus,
  getSizeDetails,
} from "@base/get-data-utils";
import PetDetails from "./PetDetails";

const PetDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const petDetailsData = await getPetDetails({
    enableFetch: true,
    id,
    locale: "pt|en",
  });

  const colorsData = await getColorDetails({
    enableFetch: true,
    disableCache: true,
    id: petDetailsData?.details?.[0]?.color,
    locale: "pt",
  });

  const petStatusData = await getPetStatus({
    enableFetch: true,
    disableCache: true,
    token,
  });

  const sizesData = await getSizeDetails({
    enableFetch: true,
    id: petDetailsData?.details?.[0]?.size,
    locale: "pt",
  });

  return (
    <PetDetails
      data={{ petDetailsData, colorsData, petStatusData, sizesData }}
      token={token}
      id={Number(id)}
    />
  );
};

export default PetDetailsPage;
