import React from "react";
import Image from "next/image";

import { getAnime } from "@/app/lib/getAnime";
import { ItemsProps } from "@/app/ui/Select";

interface windowKeys {
  [key: string]: string;
}

export const getTailleChapitres = (): number => {
  let i = 1;
  let tailleChapitres = 0;

  while (true) {
    const episodeKey = `eps${i}`;

    if ((window as unknown as windowKeys)[episodeKey] !== undefined) {
      tailleChapitres++;
    } else {
      break;
    }

    i++;
  }

  return tailleChapitres;
};

export const selectChapter = (
  item: ItemsProps,
  currentAnime: string,
): React.ReactNode[] | undefined => {
  const scrollPosition = localStorage.getItem(
    `${currentAnime}--scrollPosition`,
  );

  if (!scrollPosition) window.scrollTo({ top: 0, behavior: "smooth" });

  const { IMAGE_URL } = getAnime(currentAnime)?.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];
  const placeholder = document.querySelector(".placeholder") as HTMLElement;

  if (item?.name && item?.value) {
    if (placeholder) placeholder.innerText = item.name;

    const scans = (window as unknown as windowKeys)[`eps${item.value}`];

    localStorage.setItem(`${currentAnime}--chapitre`, item.value);

    for (let i = 1; i <= scans.length; i++) {
      scansImages.push(
        <img
          key={`Image ${i}`}
          className="scanImg w-[1000px]"
          alt={`Image ${i}`}
          src={IMAGE_URL!({ chapitre: item.value, index: i })}
        />,
      );
    }

    return scansImages;
  }

  return undefined;
};
