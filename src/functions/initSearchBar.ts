export function initSearchBar(
  input: HTMLInputElement,
  container: HTMLCollectionOf<HTMLElement>
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

  function updateResults(): void {
    Array.from(container).forEach((element, index) => {
      if (
        input.value.length === 0 ||
        element.id.toLowerCase().includes(input.value.toLowerCase())
      ) {
        container[index].classList.remove('invisible');
      } else {
        container[index].classList.add('invisible');
      }
    });

    if (window.location.hash === '#/' || window.location.hash === '') {
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
  }

  input.addEventListener('input', updateResults);
}
