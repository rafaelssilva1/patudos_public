import { FiltersType } from "@base/components/filters/Filters.types";

type PropTypes = {
  enableFetch: boolean;
  locale: string;
  limit: number;
  filters?: FiltersType;
  searchFilter?: string | number;
  ignoreAdopted?: number;
  disableCache?: boolean;
};

const getPets = async ({
  enableFetch,
  locale,
  limit,
  filters,
  searchFilter,
  ignoreAdopted = 1,
  disableCache = false,
}: PropTypes) => {
  if (!enableFetch) return null;

  const { type, color, sex, size, specialNeeds } = filters || {};

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/pets?locale=${locale}&limit=${limit}&type=${type}&color=${color}&sex=${sex}&size=${size}&specialneeds=${specialNeeds}&searchFilter=${searchFilter}&ignoreAdopted=${ignoreAdopted}`,
    {
      cache: disableCache ? "no-store" : "force-cache",
    },
  ).then((res) => res.json());

  return data;
};

export default getPets;
