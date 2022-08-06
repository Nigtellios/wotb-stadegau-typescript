import FetchTanksListBuilder from './FetchTanksListBuilder';

export default class BuildTanksList {
  public fetchTanksListInstance;
  public tanksList: object[];
  public errorMessage: string;
  protected tanksStorage: Storage;
  protected tanksFromStorage: object[];

  constructor() {
    this.fetchTanksListInstance = new FetchTanksListBuilder();
    this.tanksList = [];
    this.errorMessage = '';
    this.tanksStorage = localStorage;
    this.tanksFromStorage = [];
  }

  public async init() {
    await this.buildDataStorage();
  }

  public async getList() {
    try {
      const { data } = await this.fetchTanksListInstance.buildFetch();
      this.tanksList = data;
    } catch (error) {
      (error as Error).message = this.errorMessage;
    }
  }

  public async buildDataStorage() {
    if (!this.tanksStorage.getItem('tanksCollection')) {
      await this.getList();
      this.tanksStorage.setItem('tanksCollection', JSON.stringify(this.tanksList));
    }

    this.tanksFromStorage = [JSON.parse(this.tanksStorage.getItem('tanksCollection') || '[]')];

    console.log(this.tanksFromStorage);
  }
}
