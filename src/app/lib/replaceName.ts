export default function replaceName(url: string, query: string): string {
  const segments = url.split("/");

  segments[5] = query;

  return segments.join("/");
}
