import BuildTanksList from './BuildTanksList';

export default class SearchBar {
  public searchBarElement: HTMLElement;
  public searchValue: string;

  constructor() {
    this.searchBarElement = document.querySelector('#searchBar') as HTMLElement;
    this.searchValue = '';
  }

  public async init() {
    const list = new BuildTanksList();
    await list.init();

    this.searchBarElement.addEventListener('keyup', (e: KeyboardEvent) => {
      this.searchValue = (e.target as HTMLInputElement).value;
      console.log(this.searchValue);
    });
  }
}
