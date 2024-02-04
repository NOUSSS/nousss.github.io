import { clear, toUpper } from './main.ts';

export function initSearchBar(
  input: HTMLInputElement,
  div: HTMLCollectionOf<any>,
  component: string,
  setOutput: any
): void {
  const output = document.querySelector<HTMLElement>(`.output--${component}`)!;

  let i = 0;

  function updateResults(): void {
    let count = 0;

    Array.from([...div]).map((_, index) => {
      div[index].style.display = '';

      if (!div[index].id.toLowerCase().includes(input.value.toLowerCase())) {
        div[index].style.display = 'none';
      } else {
        count++;
      }
    });

    output.style.display = '';
    setOutput(
      <>
        {count > 1 ? (
          <>
            <span>{count}</span> {toUpper(component)} trouvés.
          </>
        ) : (
          <>
            <span>{count}</span> {toUpper(component)} trouvé.
          </>
        )}
      </>
    );
  }

  i++;

  if (input.value.length === 1) {
    input.addEventListener('keydown', ({ code }) => {
      if (code === 'Backspace' && input.value.length === 1) {
        clear(div);

        setOutput('');

        return;
      }

      if (code === 'Backspace' && input.value.length > 1) {
        updateResults();
      }
    });
  }

  if (!input.value) {
    clear(div);

    output.style.display = 'none';

    return;
  }

  let cacheIndex = i;

  if (cacheIndex === i) {
    updateResults();
  }
}
