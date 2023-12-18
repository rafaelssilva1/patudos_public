import { useEffect, useState } from "react";

const useDebounce = ({ query, delay }: { query: string; delay?: number }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay || 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query, delay]);

  return debouncedQuery;
};

export default useDebounce;
