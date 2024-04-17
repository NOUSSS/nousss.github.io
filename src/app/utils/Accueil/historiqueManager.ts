import { Historique } from "@/typings/types";
import { toast } from "sonner";

export const removeAnimeFromHistorique = (
  animeName: string,
  redirectAnime: string,
  setHistoriques: React.Dispatch<React.SetStateAction<Historique[]>>,
) => {
  const keysToRemove = [];

  if (redirectAnime === "Episodes" || redirectAnime === "Films") {
    keysToRemove.push(
      `${animeName}--saison`,
      `${animeName}--episode`,
      `${animeName}--currentFilm`,
      `${animeName}--lecteur`,
    );

    Object.keys(localStorage).forEach((key) => {
      if (key.includes("--lang") && key.includes(animeName)) {
        keysToRemove.push(key);
      }
    });
  } else if (redirectAnime === "Scans") {
    keysToRemove.push(`${animeName}--chapitre`);
  }

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });

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
