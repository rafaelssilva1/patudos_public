import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export type QueryDataTypes = { value: string };

const useQueryParams = () => {
  const searchParams = useSearchParams();

  const [currentParams, setCurrentParams] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    let string = "";

    const array = Array.from(params);

    array.forEach(([key, value], index) => {
      string += `${key}=${value}${index + 1 !== array.length ? "&" : ""}`;
    });

    setCurrentParams(string);
  }, [searchParams]);

  const createQueryString = useCallback(
    ({
      name,
      data,
      remove,
      reset = false,
      clearAllFilters,
    }: {
      name: string;
      data: QueryDataTypes[];
      remove?: boolean;
      reset?: boolean;
      clearAllFilters?: boolean;
    }) => {
      const params = new URLSearchParams(searchParams);

      if (clearAllFilters) {
        searchParams.forEach(
          (_, key) => searchParams.has(key) && params.delete(key),
        );
      }

      let queryData = "";
      data.forEach(({ value }, index) => {
        if (!value) {
          return;
        }
        queryData += `${value}${index + 1 !== data.length ? "|" : ""}`;
      });
      queryData ? params.set(name, queryData) : params.delete(name);
      remove && searchParams.has(name) && params.delete(name);

      if (reset && queryData) params.set("page", "1");

      const parsedParams = decodeURIComponent(params.toString());

      setCurrentParams(parsedParams);
      return parsedParams;
    },
    [searchParams],
  );

  return { currentParams, createQueryString };
};

export default useQueryParams;
