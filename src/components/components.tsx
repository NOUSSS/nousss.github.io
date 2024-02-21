import { Link } from 'react-router-dom';

export function Title({
  accueil = false,
  link,
}: {
  accueil?: boolean;
  link?: string;
}) {
  return accueil ? (
    <div className="title accueil">
      <h1>Le catalogue</h1>
    </div>
  ) : (
    <div className="title accueil">
      <Link to={link ? '/' + link : '/'} style={{ fontSize: '60px' }}>
        <h1>
          {window.localStorage
                .getItem('anime')
                ?.split(' ')
                .map((word) => {
                  return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  );
                })
                .join(' ')}
        </h1>
      </Link>
    </div>
  );
}

export function Footer({ media = false }: { media?: boolean }) {
  return (
    <>
      {media ? (
        <p className="mark">
          Les URL des vidéos / scans présentent sur Mugiwara-no Streaming sont
          prise directement du site anime-sama.fr. De plus, contactez
          directement la plateforme d'hébergement vidéo (sibnet pour la plupart
          des cas) pour toutes réclamations de droits relatifs aux contenus en
          question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </>
  );
}
