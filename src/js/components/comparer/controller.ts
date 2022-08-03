import insertCurrentDate from '../../helpers/utilities';

/* Load Functionalities after DOM Content is Loaded */
document.addEventListener('DOMContentLoaded', () => {
  /* Element Hooks */
  const infoBoxDate = document.querySelector('.comparer__info-box-date') as HTMLElement;
  const comparerSearchBar = document.querySelector('#searchBar') as HTMLElement;

  infoBoxDate.textContent = `${insertCurrentDate()}, `;

  comparerSearchBar.addEventListener('keyup', (e) => {
    const searchString = (e.target as HTMLInputElement).value;
    console.log(searchString);
  });
});
