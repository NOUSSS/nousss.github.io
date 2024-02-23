import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.svg';

export default function SearchBar({
  component,
  container,

  setOutput,
}: {
  component: string;
  container: string;

  setOutput: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}) {
  return (
    <label
      className={`label--${component}`}
      title="Systeme de recherche super cool"
    >
      <img src={searchImg} alt="" />
      <input
        type="text"
        placeholder="Votre recherche..."
        onInput={() =>
          initSearchBar(
            document.querySelector('input')!,
            document.getElementsByClassName(
              container
            ) as HTMLCollectionOf<HTMLElement>,
            component,
            setOutput
          )
        }
      />
    </label>
  );
}
