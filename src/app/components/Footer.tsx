import Link from "next/link";

export function Footer({
  media = false,
  style,
}: {
  media?: boolean;
  style?: boolean;
}) {
  return (
    <footer
      className={`${!style ? "" : "w-full bg-zinc-900 bg-opacity-50"} mt-4 p-8`}
    >
      <div className="flex flex-col text-base">
        <Link
          className="text-main underline"
          href={{
            pathname: "/Suggest",
          }}
        >
          Suggérer une oeuvre
        </Link>

        <Link
          className="text-main underline"
          href={{
            pathname: "/Report",
          }}
        >
          Signaler un problème ?
        </Link>
      </div>

      {media ? (
        <p className="mb-5">
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits relatifs aux contenus en question.
        </p>
      ) : null}

      <p>© 2024 Mugiwara-no Streaming - Tous droits réservés.</p>
    </footer>
  );
}
