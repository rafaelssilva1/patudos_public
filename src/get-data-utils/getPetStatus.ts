const getPetStatus = async ({
  enableFetch,
  disableCache,
  token,
}: {
  enableFetch: boolean;
  disableCache?: boolean;
  token: string;
}) => {
  if (!enableFetch) return null;

  const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/status/pets`, {
    cache: disableCache ? "no-store" : "force-cache",
    headers: {
      "X-JWT-Token": token,
    },
  }).then((res) => res.json());

  return data;
};

export default getPetStatus;
