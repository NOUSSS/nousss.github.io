import Link from "next/link";

export function Footer({
  media = false,
  style,
}: {
  media?: boolean;
  style?: boolean;
}) {
  return (
    <div
      className={`${!style ? "" : "w-full bg-zinc-900 bg-opacity-50"} mt-4 p-8`}
    >
      <Link
        className="text-sm text-main underline"
        href={{
          pathname: "Report",
        }}
      >
        Signaler un problème ?
      </Link>

      {media ? (
        <p className="mb-5">
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits relatifs aux contenus en question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
}
