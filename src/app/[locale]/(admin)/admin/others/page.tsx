import { getColorDetails, getSizeDetails } from "@base/get-data-utils";
import Others from "./Others";
import { cookies } from "next/headers";

const OthersPage: React.FC = async () => {
  const sizesData = await getSizeDetails({
    enableFetch: true,
    disableCache: true,
    locale: "pt|en",
  });
  const colorsData = await getColorDetails({
    enableFetch: true,
    disableCache: true,
    locale: "pt|en",
  });

  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  return <Others data={{ sizesData, colorsData }} token={token} />;
};

export default OthersPage;
