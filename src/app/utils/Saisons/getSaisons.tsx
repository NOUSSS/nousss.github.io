import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { getAnime } from "@/app/lib/getAnime";

import Image from "next/image";

export function getSaisons() {
  const currentAnime = getCurrentAnime({ wSaison: false });
  const options = getAnime(currentAnime)?.options;

  const saisonsList = [];

  if (options && options.EPISODES_OPTIONS && options.saisons) {
    const { allIndex } = options.EPISODES_OPTIONS;
    const { saisons } = options;

    for (let i = 0; i < Object.keys(saisons).length; i++) {
      const intervalEpisodes = `${allIndex[i + 1] + 1} - ${allIndex[i + 2]}`;
      const saisonsValues = Object.values(saisons!);

      saisonsList.push({
        id: `${saisonsValues[i].name}|${
          typeof saisonsValues[i].aliases === "undefined"
            ? ""
            : saisonsValues[i].aliases?.join(", ")
        } ${i === Object.keys(saisonsValues).length - 1 ? "" : intervalEpisodes}`,
        element: (
          <>
            <div className="flex-col overflow-hidden rounded-md text-center">
              <Image
                src={saisonsValues?.[i].image()!}
                id={i.toString()}
                alt="poster de saison"
                className="h-36 min-h-36 w-24 min-w-24 rounded-md transition-transform group-hover:scale-105 md:h-48 md:max-h-48 md:w-32 md:min-w-32"
              />
            </div>

            <p className="text-sm md:text-base">
              <span>{saisonsValues?.[i].name}</span>
              <br />
              {i === Object.keys(saisonsValues).length - 1 && !allIndex[i + 2]
                ? ""
                : `(${intervalEpisodes})`}
            </p>
          </>
        ),
      });
    }
  }

  return saisonsList;
}
