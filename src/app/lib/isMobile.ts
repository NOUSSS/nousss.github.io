export const isMobile = () => {
  if (typeof navigator !== "undefined") {
    const regExp =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return regExp.test(navigator.userAgent);
  }
  return false;
};
