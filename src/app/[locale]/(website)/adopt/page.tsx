import useLocale from "@base/hooks/useLocale";
import Adopt from "./Adopt";
import { RENDER_LIMIT } from "@base/utils/global-variables";
import { FiltersType } from "@base/components/filters/Filters.types";
import { getColorDetails, getPets, getSizeDetails } from "@base/get-data-utils";

const PetsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const { locale } = useLocale();
  const page = searchParams?.page ? Number(searchParams?.page) : 1;
  const filters = {
    type: searchParams?.type ?? "",
    color: searchParams?.color ?? "",
    sex: searchParams?.sex ?? "",
    size: searchParams?.size ?? "",
    specialNeeds: searchParams?.specialNeeds ?? "",
  } as FiltersType;

  const petsData = await getPets({
    enableFetch: true,
    locale,
    limit: page * RENDER_LIMIT,
    filters,
    ignoreAdopted: 0,
    disableCache: true,
  });

  const sizesData = await getSizeDetails({
    enableFetch: true,
    locale,
  });
  const colorsData = await getColorDetails({
    enableFetch: true,
    locale,
  });

  return <Adopt data={{ petsData, sizesData, colorsData }} />;
};

export default PetsPage;
