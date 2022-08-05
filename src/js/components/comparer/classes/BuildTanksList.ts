import FetchTanksListBuilder from './FetchTanksListBuilder';

export default class BuildTanksList {
  public fetchTanksListInstance;
  public tanksList: object[];
  public errorMessage: string;

  constructor() {
    this.fetchTanksListInstance = new FetchTanksListBuilder();
    this.tanksList = [];
    this.errorMessage = '';
  }

  public async getList() {
    try {
      const { data } = await this.fetchTanksListInstance.buildFetch();
      this.tanksList = data;
    } catch (error) {
      (error as Error).message = this.errorMessage;
    }
  }
}
