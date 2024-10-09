import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-40 w-full bg-zinc-900 bg-opacity-50 p-8">
      <div className="flex flex-col text-base">
        <span className="inline-block">
          <Link
            className="text-main hover:underline"
            href={{
              pathname: "/Suggest",
            }}
          >
            Suggérer une oeuvre
          </Link>
        </span>

        <span className="inline-block">
          <Link
            className="text-main hover:underline"
            href={{
              pathname: "/Report",
            }}
          >
            Signaler un problème ?
          </Link>
        </span>

        <span className="inline-block">
          <Link
            className="text-main hover:underline"
            href="https://www.twitch.tv/barroonn31"
            target="_blank"
          >
            Twitch de Baron
          </Link>
        </span>
      </div>

      <div className="mt-4">
        <p>
          Mugiwara no Streaming n'héberge aucune vidéo dans son serveur.
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits
        </p>

        <p>© 2024 Mugiwara-no Streaming - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
