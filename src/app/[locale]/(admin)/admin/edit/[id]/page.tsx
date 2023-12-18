import { cookies } from "next/headers";
import Edit from "./Edit";
import {
  getColorDetails,
  getPetDetails,
  getPetStatus,
  getSizeDetails,
} from "@base/get-data-utils";

const EditPage = async ({ params: { id } }: { params: { id: string } }) => {
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
    locale: "pt",
  });

  const petStatusData = await getPetStatus({
    enableFetch: true,
    disableCache: true,
    token,
  });

  const sizesData = await getSizeDetails({
    enableFetch: true,
    locale: "pt",
  });

  return (
    <Edit
      data={{ petDetailsData, colorsData, petStatusData, sizesData }}
      token={token}
      id={Number(id)}
    />
  );
};

export default EditPage;
