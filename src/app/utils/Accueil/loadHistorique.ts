import { formatName } from "@/app/lib";
import { DatasArr, Historique } from "@/typings/types";

const loadHistorique = (
  setHistoriques: React.Dispatch<React.SetStateAction<Historique[]>>,
) => {
  const loadedHistoriques: Historique[] = [];

  ["episodes", "scans", "films"].forEach((type) => {
    const items = JSON.parse(localStorage.getItem(type) || "[]") as DatasArr;

    items.forEach((item) => {
      const animeName = formatName(item.name);
      const redirectAnime = type.charAt(0).toUpperCase() + type.slice(1);

      if (
        animeName &&
        !loadedHistoriques.find(
          ({ name, redirect }) =>
            name === animeName && redirect === redirectAnime,
        )
      ) {
        loadedHistoriques.push({
          name: animeName,
          redirect: redirectAnime,
          detail: item,
        });
      } else {
        localStorage.setItem(
          type,
          JSON.stringify(items.filter(({ name }) => name === animeName)),
        );
      }
    });
  });

  setHistoriques(loadedHistoriques);
};

export default loadHistorique;
