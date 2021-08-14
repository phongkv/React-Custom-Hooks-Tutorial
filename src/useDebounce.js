import { useRef } from "react";

export const useDebounce = (fn, delay = 1000) => {
  const timeoutRef = useRef(null);

  const debounceFn = (...args) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debounceFn;
};
