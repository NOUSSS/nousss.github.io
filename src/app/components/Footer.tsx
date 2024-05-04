import Link from "next/link";
import { cn } from "../lib";
import { FC } from "react";

interface FooterProps {
  media?: boolean;
  style?: boolean;
}

const Footer: FC<FooterProps> = ({ media = false, style }) => {
  return (
    <footer
      className={cn("mt-4 p-8", {
        "w-full bg-zinc-900 bg-opacity-50": style,
      })}
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

      {media && (
        <p className="mb-5">
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits relatifs aux contenus en question.
        </p>
      )}

      <p>© 2024 Mugiwara-no Streaming - Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
