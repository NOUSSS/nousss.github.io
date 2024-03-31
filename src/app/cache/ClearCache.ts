interface WindowKeys {
  [key: string]: string[] | undefined;
}

export default function clearCache(): void {
  for (let index = 1; typeof window[`eps${index}`] !== "undefined"; index++)
    (window as unknown as WindowKeys)[`eps${index}`] = undefined;
}
