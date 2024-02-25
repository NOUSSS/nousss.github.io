export function isIOS(): boolean {
  if (!window || !navigator) return false;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor))
    return true;

  return false;
}
