import React, { RefObject } from "react";
import Image from "next/image";

import { AnimeScansProps } from "@/typings/types";
import { ItemsProps } from "@/app/ui/Select";

interface windowKeys {
  [key: string]: string;
}

export const getTailleChapitres = (): number => {
  let tailleChapitres = 0;

  for (
    let i = 1;
    (window as unknown as windowKeys)[`eps${i}`] !== undefined;
    i++
  )
    tailleChapitres++;

  return tailleChapitres;
};

export const selectChapter = (
  Anime: AnimeScansProps,
  item: ItemsProps,

  placeholderRef: RefObject<HTMLElement>,
): React.ReactNode[] | undefined => {
  const scrollPosition = localStorage.getItem(
    `${Anime?.anime?.anime}--scrollPosition`,
  );

  if (!scrollPosition) window.scrollTo({ top: 0, behavior: "smooth" });

  const { IMAGE_URL } = Anime?.anime?.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];

  if (item?.name && item?.value) {
    if (placeholderRef.current) placeholderRef.current.innerText = item.name;

    const scans = (window as unknown as windowKeys)[`eps${item.value}`];

    localStorage.setItem(`${Anime?.anime?.anime}--chapitre`, item.value);

    for (let i = 1; i <= scans.length; i++) {
      scansImages.push(
        <Image
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          key={`Image ${i}`}
          className="w-[800px] select-none"
          alt={`Image ${i}`}
          width={1000}
          height={1000}
          src={IMAGE_URL!({ chapitre: item.value, index: i })}
        />,
      );
    }

    return scansImages;
  }

  return undefined;
};
