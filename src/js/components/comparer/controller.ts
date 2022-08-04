import insertCurrentDate from '../../helpers/utilities';
import FetchTanksListBuilder from './classes/FetchTanksListBuilder';

/* Load Functionalities after DOM Content is Loaded */
document.addEventListener('DOMContentLoaded', () => {
  /* Element Hooks */
  const infoBoxDate = document.querySelector('.comparer__info-box-date') as HTMLElement;
  const comparerSearchBar = document.querySelector('#searchBar') as HTMLElement;

  infoBoxDate.textContent = `${insertCurrentDate()}, `;

  const fetchTanksList = new FetchTanksListBuilder(['tank_id', 'images.preview', 'name', 'nation', 'tier', 'type']);
  const tanksCollection = fetchTanksList.build();

  tanksCollection.then((result) => {
    console.log(result);
  });

  comparerSearchBar.addEventListener('keyup', (e) => {
    const searchString = (e.target as HTMLInputElement).value;
    console.log(`Search Query: ${searchString}`);
  });
});
