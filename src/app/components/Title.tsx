import Link from "next/link";

import { useEffect, useState } from "react";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { useRouter } from "next/router";

export function Title({
  link,
}: {
  link?: { pathname: string; query?: { anime: string } };
}) {
  const [anime, setAnime] = useState("");

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    setAnime(getCurrentAnime({ wSaison: false }));
  }, [anime, query.anime]);

  const text = (
    <Link href={link ? link : "/"}>
      <h1>{anime || ""}</h1>
    </Link>
  );

  return <div className="animate-title text-6xl max-sm:text-5xl">{text}</div>;
}
