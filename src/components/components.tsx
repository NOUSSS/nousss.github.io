import { Link } from 'react-router-dom';

export function Title({
  accueil = false,
  link = false,
}: {
  accueil?: boolean;
  link?: boolean;
}) {
  return link ? (
    <div className="title animeName">
      <Link to="/Saisons" style={{ fontSize: '73px' }}>
        <h1>
          {accueil
            ? 'Notre catalogue'
            : window.localStorage
                .getItem('anime')
                ?.replace('-', ' ')
                .replace('-', ' ')
                .split(' ')
                .map((word) => {
                  return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  );
                })
                .join(' ')}
        </h1>
      </Link>
    </div>
  ) : (
    <Link to="/home">
      <div className="title animeName">
        <h1>
          {accueil
            ? 'Le catalogue'
            : window.localStorage
                .getItem('anime')
                ?.replace('-', ' ')
                .replace('-', ' ')
                .split(' ')
                .map((word) => {
                  return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  );
                })
                .join(' ')}
        </h1>
      </div>
    </Link>
  );
}

export function Footer({ media = false }: { media?: boolean }) {
  return (
    <>
      {media ? (
        <p className="mark">
          Mugiwara-no Streaming n'héberge aucune vidéo sur son serveur.
          Contactez directement la plateforme d'hébergement vidéo pour toutes
          réclamations de droits relatifs aux contenus en question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </>
  );
}
