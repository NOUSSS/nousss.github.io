import React from "react";
import Image from "next/image";

import { getAnime } from "@/app/lib/getAnime";

interface windowKeys {
  [key: string]: string;
}

export const getTailleChapitres = (): number => {
  let i = 1;
  let tailleChapitres = 0;

  const infinite = true;

  while (infinite) {
    const episodeKey = `eps${i}`;

    if (typeof (window as unknown as windowKeys)[episodeKey] !== "undefined") {
      tailleChapitres++;
    } else {
      break;
    }

    i++;
  }

  return tailleChapitres;
};

export const selectChapter = (
  newChapter: number | string,
  currentAnime: string
): React.ReactNode[] | undefined => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const { IMAGE_URL } = getAnime(currentAnime)?.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];
  const select = document.querySelector("select");

  if (select) {
    const options = select.options;
    const index = Number(newChapter) - 1;

    if (index >= 0 && index < options.length) {
      const chapterTitle = options[index].innerText;
      const scans = (window as unknown as windowKeys)[`eps${newChapter}`];

      localStorage.setItem(
        `${currentAnime}--chapitre`,
        String(Number(newChapter))
      );

      select.value = chapterTitle;

      for (let i = 1; i <= scans.length; i++) {
        scansImages.push(
          <Image
            alt={`Image ${i}`}
            key={`Image ${i}`}
            width="1000"
            height="1000"
            src={IMAGE_URL!({ chapitre: newChapter, index: i })}
          ></Image>
        );
      }

      return scansImages;
    }
  }

  return undefined;
};
