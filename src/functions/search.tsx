import { toUpper } from './main';

export function initSearchBar(
  input: HTMLInputElement,
  div: HTMLCollectionOf<HTMLElement>,
  component: string,

  setOutput: React.Dispatch<React.SetStateAction<React.ReactNode>>
): void {
  const colorpicker = document.querySelector('.color-picker') as HTMLDivElement;

  if (
    input.value.toLowerCase() === 'nouss prime' ||
    input.value.toLowerCase() === 'noussprime' ||
    input.value.toLowerCase() === 'nouss prime ' ||
    input.value.toLowerCase() === ' nouss prime'
  ) {
    if (colorpicker) {
      colorpicker.classList.remove('invisible');
    }
  } else {
    if (colorpicker) {
      colorpicker.classList.add('invisible');
    }
  }

  const output = document.querySelector<HTMLElement>(
    `.search--output--${component}`
  )!;

  function updateResults(): void {
    let count = 0;

    Array.from([...div]).forEach((element, index) => {
      if (
        input.value.length === 0 ||
        element.id.toLowerCase().includes(input.value.toLowerCase())
      ) {
        div[index].classList.remove('invisible');
        if (input.value.length !== 0) count++;
      } else {
        div[index].classList.add('invisible');
      }
    });

    if (component === 'anime') {
      const categories = document.querySelectorAll('.catalogue > div');

      categories.forEach((category) => {
        const items = category.querySelectorAll('li');
        const isAllHidden = Array.from(items).every((item) =>
          item.classList.contains('invisible')
        );

        isAllHidden
          ? category.classList.add('invisible')
          : category.classList.remove('invisible');
      });
    }

    setOutput(
      input.value.length === 0 ? null : (
        <>
          <span>{count}</span> {toUpper(component)}{' '}
          {count > 1 ? 'trouvés' : 'trouvé'}
        </>
      )
    );

    input.value.length === 0
      ? output.classList.add('invisible')
      : output.classList.remove('invisible');
  }

  input.addEventListener('input', updateResults);
}
