export default function normalizeString(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’'`]/g, "")
    .toLowerCase()
    .trim();
}
