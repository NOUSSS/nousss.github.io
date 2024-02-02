export function Title() {
  return (
    <div className="title">
      <h1>
        One <span>Piece</span>
      </h1>
    </div>
  );
}

export function Footer() {
  return (
    <>
      {!['#/', ''].includes(window.location.hash) ? (
        <p className="mark">
          Les vidéos / scans ne sont pas hébergées sur nos serveurs.
        </p>
      ) : (
        ''
      )}
      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </>
  );
}
