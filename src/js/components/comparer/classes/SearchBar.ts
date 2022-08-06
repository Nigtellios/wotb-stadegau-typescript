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

    this.searchBarElement.addEventListener('keyup', (e: KeyboardEvent) => {
      this.searchValue = (e.target as HTMLInputElement).value;
      console.log(this.searchValue);
    });
  }
}
