import { isIOS } from "../lib/isIOS";

const DownloadComponent = ({
  video,
  lecteur,
  className,
}: {
  video: string;
  lecteur: string;
  className: string;
}) => {
  const videoLink = lecteur === "epsAS" ? video : `https://9xbud.com/${video}`;

  if (!video) return null;

  return (
    <div style={{ textAlign: "left" }} className={className}>
      {lecteur === "epsAS" ? (
        isIOS() ? (
          <>
            Pour télécharger l'épisode, cliquez{" "}
            <a
              style={{ color: "var(--mainColor)", textDecoration: "underline" }}
              href={videoLink}
            >
              ici
            </a>
            , puis appuyez sur le bouton partager en bas, puis 'Enregistrer dans
            fichiers'
          </>
        ) : (
          <>
            Pour télécharger l'épisode, faites <span>clique droit</span> sur
            celui-ci, puis 'Enregistrer la vidéo sous'
          </>
        )
      ) : isIOS() ? (
        <>
          Pour télécharger l'épisode, cliquez{" "}
          <a
            style={{ color: "var(--mainColor)", textDecoration: "underline" }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur 'DOWNLOAD NOW' ensuite appuyez sur le bouton
          partager en bas, puis 'Enregistrer dans fichiers'
        </>
      ) : (
        <>
          Pour télécharger l'épisode, cliquez{" "}
          <a
            style={{ color: "var(--mainColor)", textDecoration: "underline" }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur 'DOWNLOAD NOW' ensuite faites{" "}
          <span>clique droit</span>, 'Enregistrer la vidéo sous'
        </>
      )}
    </div>
  );
};

export default DownloadComponent;
