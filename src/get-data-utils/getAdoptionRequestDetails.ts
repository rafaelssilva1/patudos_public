const getAdoptionRequestDetails = async ({
  enableFetch,
  disableCache,
  token,
  id,
}: {
  enableFetch: boolean;
  disableCache: boolean;
  token: string;
  id: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/adoptions/${id}`,
    {
      cache: disableCache ? "no-store" : "force-cache",
      headers: {
        "X-JWT-Token": token,
      },
    },
  ).then((res) => res.json());

  return data;
};

export default getAdoptionRequestDetails;
