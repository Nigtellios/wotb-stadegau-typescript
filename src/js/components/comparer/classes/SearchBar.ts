import BuildTanksList from './BuildTanksList';

export default class SearchBar {
  public searchBarElement: HTMLElement;
  public searchValue: string;
  protected storedTanksList: object[];

  constructor() {
    this.searchBarElement = document.querySelector('#searchBar') as HTMLElement;
    this.searchValue = '';
    this.storedTanksList = [];
  }

  public async init() {
    const list = new BuildTanksList();
    await list.init();
    this.storedTanksList = list.tanksFromStorage;

    // TODO - Build List with Filtration, create HTML Element for list and render it inside of it, but render only some of the results (not all)
    this.searchBarElement.addEventListener('keyup', (e: KeyboardEvent) => {
      this.searchValue = (e.target as HTMLInputElement).value;
      console.log(this.searchValue);
    });
  }
}
