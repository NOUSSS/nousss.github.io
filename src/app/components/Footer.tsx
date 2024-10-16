import { icons } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const Copyright = icons["Copyright"];
  const Qui = icons["CircleUserRound"];

  return (
    <footer className="mt-40 w-full border-t border-neutral-700 bg-zinc-900 bg-opacity-50 p-8">
      <div className="flex flex-col text-base border-b border-neutral-700">
        <span className="inline-block">
          <Link
            className="text-main hover:underline"
            href={{
              pathname: "/Suggest",
            }}
          >
            Suggérer une oeuvre ?
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

        {/* <span className="inline-block">
          <Link
            className="text-main hover:underline"
            href="https://www.twitch.tv/barroonn31"
            target="_blank"
          >
            Twitch de Baron
          </Link>
        </span> */}
      </div>

      <div className="mt-4">
        <ul className="flex flex-col justify-around *:flex *:flex-col *:items-center *:max-md:mt-6 md:flex-row *:md:max-w-64">
          <li>
            <p className="flex items-center gap-2 text-2xl font-normal">
              <Qui /> Qui je suis ?
            </p>
            Mugiwara no Streaming est un site de référencement d'animes (films +
            scans) sans publicitées intrusives et avec une interface intuitive.
          </li>

          <li>
            <p className="text-2xl font-normal">Informations supplémentaires</p>
            Nous n'hébergeons aucune vidéo sur notre serveur, contactez
            directement la plateforme d'hébergement vidéo pour toutes
            réclamations de droits.
          </li>

          <li>
            <p className="flex items-center gap-2 text-2xl font-normal">
              <Copyright />
              Copyright
            </p>
            © 2024 Mugiwara-no Streaming - Tous droits réservés.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
