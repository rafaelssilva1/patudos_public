const getAdoptionRequests = async ({
  enableFetch,
  disableCache,
  limit,
  token,
}: {
  enableFetch: boolean;
  disableCache?: boolean;
  limit?: number;
  token: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/adoptions?limit=${limit}`,
    {
      cache: disableCache ? "no-store" : "force-cache",
      headers: {
        "X-JWT-Token": token,
      },
    },
  ).then((res) => res.json());

  return data;
};

export default getAdoptionRequests;
