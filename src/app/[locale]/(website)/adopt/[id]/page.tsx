import useLocale from "@base/hooks/useLocale";
import PetDetails from "./AdoptDetails";
import {
  getColorDetails,
  getPetDetails,
  getSizeDetails,
} from "@base/get-data-utils";

const PetDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { locale } = useLocale();
  const petDetailsData = await getPetDetails({ enableFetch: true, id, locale });
  const sizesData = await getSizeDetails({
    enableFetch: true,
    id: petDetailsData?.details?.[0]?.size,
    locale,
  });
  const colorData = await getColorDetails({
    enableFetch: true,
    id: petDetailsData?.details?.[0]?.color,
    locale,
  });

  return <PetDetails data={{ petDetailsData, sizesData, colorData }} />;
};

export default PetDetailsPage;
