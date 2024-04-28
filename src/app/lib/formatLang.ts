type langType = "vostfr" | "vf";

export default function formatLang(lang: langType) {
  return {
    vostfr: "VostFR",
    vf: "VF",
  }[lang];
}
