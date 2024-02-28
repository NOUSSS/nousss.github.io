import React, { RefObject } from 'react';
import { ANIMES } from './animes/constants';
import { formatName } from './functions/formatName';

const FastSearchBar = ({
  setOutput,
  setIsVisible,

  isVisible,
  searchContainerRef,
}: {
  setOutput: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  searchContainerRef: RefObject<HTMLDivElement>;

  isVisible: boolean;
}) => {
  React.useEffect(() => {
    const toggleSearchContainer = () => {
      setIsVisible(!isVisible);
      console.log(document.body.style);

      document.body.style.overflow = isVisible ? 'hidden' : '';

      const background = document.querySelector('.background') as HTMLElement;

      if (background)
        background.style.filter = isVisible ? 'blur(5px)' : 'blur(0px)';
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);

        document.body.style.overflow = '';

        const background = document.querySelector('.background') as HTMLElement;
        if (background) background.style.filter = 'blur(5px)';
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false);

        document.body.style.overflow = '';

        const background = document.querySelector('.background') as HTMLElement;
        if (background) background.style.filter = 'blur(5px)';
      } else if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();

        toggleSearchContainer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, searchContainerRef, setIsVisible]);

  return (
    <input
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        const filteredAnimes = ANIMES.filter(({ anime, aliases }) => {
          const value = inputValue.toLowerCase();

          return (
            formatName(anime).toLowerCase().includes(value) ||
            (aliases &&
              aliases.some((alias) => alias.toLowerCase().includes(value)))
          );
        });

        if (filteredAnimes.length === 0) {
          setOutput(<p>Aucun résultat trouvé.</p>);
        } else if (filteredAnimes.length > 0) {
          setOutput(
            <ul>
              {filteredAnimes.map(({ options, anime, synopsis }) => (
                <li
                  key={anime}
                  onClick={() => {
                    setIsVisible(!isVisible);

                    window.location.hash =
                      '/Home?anime=' + encodeURI(formatName(anime));
                  }}
                >
                  <div className="left">
                    <img src={options.affiche} alt={anime} />
                  </div>
                  <div className="right">
                    <h1>
                      {formatName(anime).length > 30
                        ? `${formatName(anime).substring(0, 30)}...`
                        : formatName(anime)}
                    </h1>

                    <p>{synopsis}</p>
                  </div>
                </li>
              ))}
            </ul>
          );
        }
      }}
      type="text"
      placeholder="Recherche rapide..."
    />
  );
};

export default FastSearchBar;
