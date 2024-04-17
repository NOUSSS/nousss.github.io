import React, { RefObject } from "react";
import Image from "next/image";

import { Anime } from "@/typings/types";
import { ItemsProps } from "@/app/components/Select";

export const selectChapter = (
  Anime: Anime.AnimeScansProps,
  item: ItemsProps,

  placeholderRef: RefObject<HTMLElement>,
  newName: string | undefined,
): React.ReactNode[] | undefined => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const { IMAGE_URL } = Anime?.anime?.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];

  if (item?.name && item?.value) {
    if (placeholderRef.current) placeholderRef.current.innerText = item.name;

    const scans = window[`eps${item.value}`];

    localStorage.setItem(`${Anime?.anime?.anime}--chapitre`, item.value);

    for (let i = 1; i <= scans!.length; i++) {
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
          src={
            newName
              ? replaceName(
                  IMAGE_URL!({ chapitre: item.value, index: i }),
                  newName,
                )
              : IMAGE_URL!({ chapitre: item.value, index: i })
          }
        />,
      );
    }

    return scansImages;
  }

  return undefined;
};

function replaceName(url: string, query: string): string {
  const segments = url.split("/");

  segments[5] = query;

  return segments.join("/");
}
