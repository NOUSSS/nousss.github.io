import { useState, useCallback } from "react";

export default function useAnime<T>(initialState: T) {
  const [anime, setAnime] = useState<T>(initialState);

  const updateAnime = useCallback(
    (newData: Partial<T> | ((prevState: T) => Partial<T>)) => {
      setAnime((prevState) => ({
        ...prevState,
        ...(typeof newData === "function" ? newData(prevState) : newData),
      }));
    },
    [],
  );

  return [anime, updateAnime] as const;
}
