import React from 'react';

type DownloadComponentProps = {
  video: string;
  lecteur: string;

  isIOS: () => boolean;

  className: string;
};

const DownloadComponent: React.FC<DownloadComponentProps> = ({
  video,
  lecteur,
  isIOS,
  className,
}) => {
  const videoLink = lecteur === 'epsAS' ? video : `https://9xbud.com/${video}`;

  if (!video) return null;

  return (
    <div className={className}>
      {lecteur === 'epsAS' ? (
        isIOS() ? (
          <>
            Pour télécharger l'épisode, cliquez{' '}
            <a
              style={{ color: '#ffa300', textDecoration: 'underline' }}
              href={videoLink}
            >
              ici
            </a>
            , puis appuyez sur la bouton partager en bas, puis 'Enregistrer dans
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
          Pour télécharger l'épisode, cliquez{' '}
          <a
            style={{ color: '#ffa300', textDecoration: 'underline' }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur <span>'DOWNLOAD NOW'</span> ensuite appuyez sur la
          bouton partager en bas, puis 'Enregistrer dans fichiers'
        </>
      ) : (
        <>
          Pour télécharger l'épisode, cliquez{' '}
          <a
            style={{ color: '#ffa300', textDecoration: 'underline' }}
            target="_blank"
            href={videoLink}
          >
            ici
          </a>
          , puis cliquez sur <span>'DOWNLOAD NOW'</span> ensuite faites{' '}
          <span>clique droit</span>, 'Enregistrer la vidéo sous'
        </>
      )}
    </div>
  );
};

export default DownloadComponent;
