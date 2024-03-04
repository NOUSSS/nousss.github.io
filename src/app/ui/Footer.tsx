export function Footer({ media = false }: { media?: boolean }) {
  return (
    <div className="footer">
      {media ? (
        <p className="mark">
          Les URL des vidéos / scans présentent sur Mugiwara-no Streaming sont
          prise directement du site anime-sama.fr. De plus, contactez
          directement la plateforme d&apos;hébergement vidéo (sibnet pour la
          plupart des cas) pour toutes réclamations de droits relatifs aux
          contenus en question.
        </p>
      ) : null}
      <footer>© 2024 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
}
