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
            Pour télécharger l&apos;épisode, cliquez{" "}
            <a
              style={{ color: "var(--mainColor)", textDecoration: "underline" }}
              href={videoLink}
            >
              ici
            </a>
            , puis appuyez sur le bouton partager en bas, puis &apos;Enregistrer
            dans fichiers&apos;
          </>
        ) : (
          <>
            Pour télécharger l&apos;épisode, faites <span>clique droit</span>{" "}
            sur celui-ci, puis &apos;Enregistrer la vidéo sous&apos;
          </>
        )
      ) : isIOS() ? (
        <>
          Pour télécharger l&apos;épisode, cliquez{" "}
          <a
            style={{ color: "var(--mainColor)", textDecoration: "underline" }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur &apos;DOWNLOAD NOW&apos; ensuite appuyez sur le
          bouton partager en bas, puis &apos;Enregistrer dans fichiers&apos;
        </>
      ) : (
        <>
          Pour télécharger l&apos;épisode, cliquez{" "}
          <a
            style={{ color: "var(--mainColor)", textDecoration: "underline" }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur &apos;DOWNLOAD NOW&apos; ensuite faites{" "}
          <span>clique droit</span>, &apos;Enregistrer la vidéo sous&apos;
        </>
      )}
    </div>
  );
};

export default DownloadComponent;
