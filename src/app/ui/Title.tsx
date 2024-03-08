import Link from "next/link";

import { useEffect, useState } from "react";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { formatName } from "@/app/lib/formatName";
import { useRouter } from "next/router";

export function Title({
  accueil = false,
  link,
}: {
  accueil?: boolean;
  link?: {
    pathname: string;
    query?: { anime: string };
  };
}) {
  const [anime, setAnime] = useState("");

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    setAnime(getCurrentAnime({ wSaison: false }));
  }, [anime, query.anime]);

  const text = accueil ? (
    <h1
      style={{
        marginTop: "20px",
        textAlign: "left",
      }}
    >
      Le catalogue
    </h1>
  ) : (
    <Link href={link ? link : "/"} style={{ fontSize: "60px" }}>
      <h1>{formatName(anime)}</h1>
    </Link>
  );

  return <div className="title">{text}</div>;
}
