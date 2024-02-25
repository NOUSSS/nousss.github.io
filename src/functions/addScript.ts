import toast from 'react-hot-toast';

export function addScript({
  url,

  currentAnime,
  saisonIndex,

  setLang,
}: {
  url: string;
  currentAnime: string;
  saisonIndex?: string;
  setLang?: React.Dispatch<React.SetStateAction<string>>;
}): Promise<() => void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.className = 'script';
    script.async = true;

    script.setAttribute('src', url);

    const loading = toast.loading('Chargement des sources en cours...', {
      position: 'bottom-center',

      style: {
        fontFamily: 'Fredoka',
        fontSize: '15px',
      },
    });

    script.onload = () => {
      toast.dismiss(loading);

      toast.success('Les sources ont bien été chargées !', {
        position: 'bottom-center',

        style: {
          color: 'var(--mainColor)',
          fontFamily: 'Fredoka',
          fontSize: '15px',
        },
      });

      resolve(() => document.head.removeChild(script));
    };

    script.onerror = () => {
      if (setLang) {
        setLang('vostfr');

        if (saisonIndex) {
          window.localStorage.setItem(
            `${currentAnime}--${saisonIndex}--lang`,
            'vostfr'
          );
        } else {
          window.localStorage.setItem(`${currentAnime}--lang`, 'vostfr');
        }
      }

      toast.error('Erreur dans le chargement des sources', {
        position: 'bottom-center',

        style: {
          color: 'red',
          fontFamily: 'Fredoka',
          fontSize: '15px',
        },
      });

      toast.dismiss(loading);
      reject(() => document.head.removeChild(script));
    };

    document.head.appendChild(script);
  });
}
