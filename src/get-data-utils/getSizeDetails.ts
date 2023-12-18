const getSizeDetails = async ({
  enableFetch,
  id,
  disableCache,
  locale,
}: {
  enableFetch: boolean;
  disableCache?: boolean;
  id?: string;
  locale: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/sizes/${
      id ? id : ""
    }?locale=${locale}`,
    {
      cache: disableCache ? "no-store" : "force-cache",
    },
  ).then((res) => res.json());

  return data;
};

export default getSizeDetails;
