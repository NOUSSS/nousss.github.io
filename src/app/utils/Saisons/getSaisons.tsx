import { getCurrentAnime, getAnime } from "@/app/lib/";

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
            <div className="overflow-hidden rounded-md text-center">
              <Image
                src={saisonsValues[i].image()}
                id={i.toString()}
                alt="poster de saison"
                className="aspect-[2/3] w-32 rounded-md transition-transform group-hover:scale-105 md:w-44"
              />
            </div>

            <p className="relative top-2 text-sm md:text-base">
              <span>{saisonsValues[i].name}</span>
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
