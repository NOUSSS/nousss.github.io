import React from "react";
import { toast } from "sonner";

import { Historique } from "@/typings/types";

export const removeAnimeFromHistorique = (
  animeName: string,
  redirectAnime: string,
  historiques: Historique[],

  setHistoriques: React.Dispatch<React.SetStateAction<Historique[]>>
) => {
  if (redirectAnime === "Episodes") {
    localStorage.removeItem(`${animeName}--saison`);
    localStorage.removeItem(`${animeName}--episode`);
    localStorage.removeItem(`${animeName}--currentTime`);

    for (const key of Object.keys(localStorage)) {
      if (key.includes("--lang") && key.includes(animeName))
        localStorage.removeItem(key);
    }
  } else if (redirectAnime === "Scans") {
    localStorage.removeItem(`${animeName}--chapitre`);
  } else if (redirectAnime === "Films") {
    localStorage.removeItem(`${animeName}--currentFilm`);
    localStorage.removeItem(`${animeName}--currentTime`);

    for (const key of Object.keys(localStorage)) {
      if (key.includes("--lang") && key.includes(animeName))
        localStorage.removeItem(key);
    }
  }

  setHistoriques(
    historiques.filter(
      (historique) =>
        !(
          historique.name === animeName && historique.redirect === redirectAnime
        )
    )
  );

  toast.success(
    `Les ${redirectAnime} de ${animeName} ont bien été retiré de l'historique !`
  );
};
