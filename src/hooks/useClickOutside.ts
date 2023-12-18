import React, { useEffect } from "react";

const useOutsideClick = (
  handler: Function,
  ref: React.RefObject<any> | null,
) => {
  const handleClick = (e: Event) => {
    if (!ref) return;

    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
