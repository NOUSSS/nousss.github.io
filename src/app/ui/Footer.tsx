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
      className={`${margin ? "mt-16" : "mt-52"} footer relative ml-2 flex flex-col justify-center after:absolute after:-top-12 after:h-[2px] after:w-full after:bg-[var(--mainColor)] ${className}`}
    >
      <Link
        className="text-sm text-[var(--mainColor)] underline"
        href={{
          pathname: "Report",
        }}
      >
        Signaler un problème ?
      </Link>

      {media ? (
        <p className="mb-5 text-left">
          Les URL des vidéos / scans présentent sur Mugiwara-no Streaming sont
          prise directement du site anime-sama.fr. De plus, contactez
          directement la plateforme d'hébergement vidéo (sibnet pour la plupart
          des cas) pour toutes réclamations de droits relatifs aux contenus en
          question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
}
