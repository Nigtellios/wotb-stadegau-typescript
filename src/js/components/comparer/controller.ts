import insertCurrentDate from '../../helpers/utilities';
import FetchTanksListBuilder from './classes/FetchTanksListBuilder';

/* Load Functionalities after DOM Content is Loaded */
document.addEventListener('DOMContentLoaded', () => {
  /* Element Hooks */
  const infoBoxDate = document.querySelector('.comparer__info-box-date') as HTMLElement;
  const comparerSearchBar = document.querySelector('#searchBar') as HTMLElement;

  infoBoxDate.textContent = `${insertCurrentDate()}, `;

  const fetchTanksList = new FetchTanksListBuilder();
  const tanksCollection = fetchTanksList.build();

  const getList = () => {
    tanksCollection.then((data) => {
      const tanks = data.data;
      console.log(tanks);
      return tanks;
    });
  };

  const collection = getList();
  console.log(collection);

  comparerSearchBar.addEventListener('keyup', (e) => {
    const searchString = (e.target as HTMLInputElement).value;
    console.log(`Search Query: ${searchString}`);
  });
});
