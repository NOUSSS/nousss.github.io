export function Title({ accueil = false }: { accueil?: boolean }) {
  return (
    <div className="title animeName">
      <h1>
        {accueil
          ? 'Notre catalogue'
          : window.localStorage
              .getItem('anime')
              ?.replace('-', ' ')
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
