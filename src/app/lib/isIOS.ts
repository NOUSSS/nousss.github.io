export const isIOS = () => {
  if (typeof navigator !== "undefined") {
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  }
  return false;
};
