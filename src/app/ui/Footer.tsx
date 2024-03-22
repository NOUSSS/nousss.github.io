import Link from "next/link";

export function Footer({
  media = false,
  margin,
  className,
}: {
  media?: boolean;
  className?: string;
  margin?: boolean;
}) {
  return (
    <div
      className={`${margin ? "mt-16" : "mt-52"} relative ml-2 after:absolute after:-top-12 after:left-0 after:h-[2px] after:w-full after:bg-main ${className}`}
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
        <p className="mb-5 text-left">
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits relatifs aux contenus en question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
}
