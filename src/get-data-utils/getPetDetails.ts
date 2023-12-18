const getPetDetails = async ({
  enableFetch,
  id,
  locale,
}: {
  enableFetch: boolean;
  id: string;
  locale: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/pets/${id}?locale=${locale}`,
  ).then((res) => res.json());

  return data;
};

export default getPetDetails;
