const getColorDetails = async ({
  enableFetch,
  disableCache,
  id,
  locale,
}: {
  enableFetch: boolean;
  disableCache?: boolean;
  id?: string;
  locale: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/colors/${
      id ? id : ""
    }?locale=${locale}`,
    {
      cache: disableCache ? "no-store" : "force-cache",
    },
  ).then((res) => res.json());

  return data;
};

export default getColorDetails;
