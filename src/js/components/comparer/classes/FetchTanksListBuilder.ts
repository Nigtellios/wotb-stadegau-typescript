import config from '../../../config/config';

export default class FetchTanksListBuilder {
  protected url?: string;

  constructor(
    public fields: string[] = ['tank_id', 'images.preview', 'name', 'nation', 'tier', 'type'],
    public methodBlock: string = 'encyclopedia',
    public methodName: string = 'vehicles',
  ) {
    this.fields = fields;
    this.methodBlock = methodBlock;
    this.methodName = methodName;
    this.buildUrl();
  }

  public buildUrl() {
    this.url = `${config.baseURL}/${this.methodBlock}/${this.methodName}/?application_id=${config.appID}`;
  }

  public getUrlParameters(fields: string[]) {
    if (!fields) return '';
    return fields.join('%2C+');
  }

  public async buildFetch(fieldsParameters: string[] = this.fields) {
    try {
      const fetchResponse = await fetch(`${this.url}&fields=${this.getUrlParameters(fieldsParameters)}`);

      // TODO - Add more advanced error handling
      if (!fetchResponse.ok) {
        throw new Error(`Fetch Error: ${fetchResponse.status}`);
      }

      return await fetchResponse.json();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
