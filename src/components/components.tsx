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
    <div className="title animeName">
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
    </div>
  );
}

export function Footer({ media = false }: { media?: boolean }) {
  return (
    <>
      {media ? (
        <p className="mark">
          Les vidéos / scans ne sont pas hébergées sur nos serveurs.
        </p>
      ) : null}
      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </>
  );
}
