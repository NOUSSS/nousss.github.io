export default function getHostname(url: string | undefined): string {
  if (!url) return "Lecteur";

  const domainMatch = url.match(/\/\/([^\/]+)/);

  if (!domainMatch) return "Lecteur";

  const domainParts = domainMatch[1].split(".");

  let siteName =
    domainParts.length > 1
      ? domainParts[domainParts.length - 2]
      : domainParts[0];

  siteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);

  return siteName;
}
