import { initSearchBar } from '../../functions/initSearchBar';

import searchImg from '../../assets/Search.svg';

export default function SearchBar({
  container,

  output,
  setOutput,
}: {
  container: string;
  output: string;

  setOutput: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}) {
  return (
    <label
      className={`label--search-bar`}
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
            output,
            setOutput
          )
        }
        onFocus={({ target }) => {
          target.parentElement?.classList.add('focus');
        }}
        onBlur={({ target }) => {
          target.parentElement?.classList.remove('focus');
        }}
      />
    </label>
  );
}
