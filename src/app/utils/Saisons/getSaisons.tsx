import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { ANIMES } from "@/animes/constants";

import Image from "next/image";

export function getSaisons() {
  const currentAnime = getCurrentAnime({ wSaison: false });

  const options =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase(),
    )!.options || {};

  const { allIndex } = options.EPISODES_OPTIONS || {};
  const { saisons } = options;

  const saisonsList = [];

  for (let i = 0; i < Object.keys(saisons!).length; i++) {
    const intervalEpisodes = `${allIndex![i + 1] + 1} - ${allIndex![i + 2]}`;
    const saisonsValues = Object.values(saisons!);

    saisonsList.push({
      id: `${saisonsValues?.[i].name}|${
        typeof saisonsValues?.[i].aliases === "undefined"
          ? ""
          : saisonsValues?.[i].aliases?.join(", ")
      } ${i === Object.keys(saisonsValues!).length - 1 ? "" : intervalEpisodes}`,
      element: (
        <>
          <Image
            src={saisonsValues?.[i].image()!}
            id={i.toString()}
            alt="poster de saison"
            className="h-[108px] w-[89px] duration-300 hover:rotate-12"
          />
          <p className="text-sm">
            <span>{saisonsValues?.[i].name}</span>
            <br />
            {i === Object.keys(saisonsValues!).length - 1
              ? ""
              : `(${intervalEpisodes})`}
          </p>
        </>
      ),
    });
  }

  return saisonsList;
}
