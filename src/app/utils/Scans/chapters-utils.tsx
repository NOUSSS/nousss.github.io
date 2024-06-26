import React, { RefObject } from "react";
import Image from "next/image";

import { Anime } from "@/typings/types";
import { ItemsProps } from "@/app/components/Select";
import ScanData from "@/app/class/scanData";

export const selectChapter = (
  Anime: Anime.AnimeScansProps,
  item: ItemsProps,

  placeholderRef: RefObject<HTMLElement>,
  newName: string | undefined,
): React.ReactNode[] => {
  const { IMAGE_URL } = Anime?.anime?.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];

  if (item?.name && item?.value && Anime.anime) {
    const StorageScans = new ScanData(Anime.anime.anime);
    const scans = window[`eps${item.value}`];

    if (placeholderRef.current) placeholderRef.current.innerText = item.name;

    StorageScans.setChapitre(item.value);

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

  return [];
};

function replaceName(url: string, query: string): string {
  const segments = url.split("/");

  segments[5] = query;

  return segments.join("/");
}
