import BuildTanksList from './BuildTanksList';

export default class SearchBar {
  public searchBarElement: HTMLElement;
  public searchValue: string;
  protected tanksCollection: object[];
  protected tanksStorage: Storage;
  protected tanksFromStorage: object[];

  constructor() {
    this.searchBarElement = document.querySelector('#searchBar') as HTMLElement;
    this.searchValue = '';
    this.tanksCollection = [];
    this.tanksStorage = localStorage;
    this.tanksFromStorage = [];
  }

  public async init() {
    await this.buildDataStorage();

    this.searchBarElement.addEventListener('keyup', (e: KeyboardEvent) => {
      this.searchValue = (e.target as HTMLInputElement).value;
      console.log(this.searchValue);
    });
  }

  public async buildDataStorage() {
    const buildTanksList = new BuildTanksList();
    await buildTanksList.getList();
    this.tanksCollection = [buildTanksList.tanksList];

    this.tanksStorage.setItem('tanksCollection', JSON.stringify(this.tanksCollection));
    this.tanksFromStorage = JSON.parse(this.tanksStorage.getItem('tanksCollection') || '[]');

    console.log(this.tanksFromStorage);
  }
}
