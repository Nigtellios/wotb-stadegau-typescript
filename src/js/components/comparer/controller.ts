import SearchBar from './classes/SearchBar';

document.addEventListener('DOMContentLoaded', async () => {
  const searchBar = new SearchBar();
  await searchBar.init();
});
