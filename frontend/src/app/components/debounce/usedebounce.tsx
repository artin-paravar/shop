import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, deley = 700) => {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, deley);
    return () => clearTimeout(timeout);
  }, [value, deley]);
  return debounced;
};
