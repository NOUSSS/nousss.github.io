export default function clearCache(): void {
  for (let index = 1; typeof window[`eps${index}`] !== "undefined"; index++)
    window[`eps${index}`] = undefined;
}
