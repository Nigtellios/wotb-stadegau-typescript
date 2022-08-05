export default class SearchBar {
  public searchBarElement: HTMLElement;
  public searchValue: string;

  constructor() {
    this.searchValue = '';
    this.searchBarElement = document.querySelector('#searchBar') as HTMLElement;
  }

  public init() {
    this.searchBarElement.addEventListener('keyup', (e: KeyboardEvent) => {
      this.searchValue = (e.target as HTMLInputElement).value;
      console.log(this.searchValue);
    });
  }
}
