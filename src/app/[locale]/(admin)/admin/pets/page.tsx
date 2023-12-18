import { cookies } from "next/headers";
import { RENDER_LIMIT } from "@base/utils/global-variables";
import Pets from "./Pets";
import {
  getColorDetails,
  getPetStatus,
  getPets,
  getSizeDetails,
} from "@base/get-data-utils";

const PetsPage: React.FC = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const page = searchParams?.page ? Number(searchParams?.page) : 1;
  const filter = searchParams?.filter ? searchParams?.filter : "";

  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const petsData = await getPets({
    enableFetch: true,
    locale: "pt",
    limit: page * RENDER_LIMIT,
    searchFilter: filter,
    disableCache: true,
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
    <Pets
      data={{ petsData, colorsData, petStatusData, sizesData }}
      token={token}
    />
  );
};

export default PetsPage;
