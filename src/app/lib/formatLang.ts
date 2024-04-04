export type langType = "vostfr" | "vf";

export function formatLang(lang: langType) {
  return {
    vostfr: "VostFR",
    vf: "VF",
  }[lang];
}
