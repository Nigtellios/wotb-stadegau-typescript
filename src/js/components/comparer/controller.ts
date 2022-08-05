import BuildTanksList from './classes/BuildTanksList';
import SearchBar from './classes/SearchBar';

document.addEventListener('DOMContentLoaded', async () => {
  const buildTanksList = new BuildTanksList();
  await buildTanksList.getList();

  const searchBar = new SearchBar();
  searchBar.init();
});
