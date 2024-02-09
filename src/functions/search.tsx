import { toUpper } from './main';

export function initSearchBar(
  input: HTMLInputElement,
  div: HTMLCollectionOf<any>,
  component: string,
  setOutput: any
): void {
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
        div[index].style.display = '';
        if (input.value.length !== 0) count++;
      } else {
        div[index].style.display = 'none';
      }
    });

    if (component === 'anime') {
      const categories = document.querySelectorAll('.catalogue > div');

      categories.forEach((category) => {
        const items = category.querySelectorAll('li');
        const isAllHidden = Array.from(items).every(
          (item) => item.style.display === 'none'
        );

        (category as HTMLElement).style.display = isAllHidden ? 'none' : '';
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

    output.style.display = input.value.length === 0 ? 'none' : '';
  }

  input.addEventListener('input', updateResults);
}
