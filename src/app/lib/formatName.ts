export const formatName = (animeName: string) => {
  return animeName
    .replaceAll("-", " ")
    .split(" ")
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
