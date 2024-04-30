import { Historique } from "@/typings/types";
import { toast } from "sonner";
import { Data } from "@/typings/types";

export const removeAnimeFromHistorique = (
  animeName: string,
  redirectAnime: string,
  setHistoriques: React.Dispatch<React.SetStateAction<Historique[]>>,
) => {
  const episodes = JSON.parse(localStorage.getItem("episodes") || "[]");
  const scans = JSON.parse(localStorage.getItem("scans") || "[]");
  const films = JSON.parse(localStorage.getItem("films") || "[]");

  const filterData = (data: Data.EpisodesData[], name: string) =>
    data.filter((item) => item.name !== name);

  if (redirectAnime === "Episodes") {
    localStorage.setItem(
      "episodes",
      JSON.stringify(filterData(episodes, animeName)),
    );
  } else if (redirectAnime === "Scans") {
    localStorage.setItem("scans", JSON.stringify(filterData(scans, animeName)));
    localStorage.setItem("films", JSON.stringify(filterData(films, animeName)));
  }

  setHistoriques((currentHistoriques) =>
    currentHistoriques.filter(
      (historique) =>
        !(
          historique.name === animeName && historique.redirect === redirectAnime
        ),
    ),
  );

  toast.success(
    `Les ${redirectAnime} de ${animeName} ont bien été retirés de l'historique !`,
  );
};
