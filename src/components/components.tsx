export function Title() {
  return (
    <div className="title">
      <h1>
        One <span>Piece</span>
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
