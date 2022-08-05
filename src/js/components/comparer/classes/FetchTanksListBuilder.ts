import config from '../../../config/config';
import { ApiOptions } from '../interfaces/ApiOptions';

export default class FetchTanksListBuilder {
  protected parameters: ApiOptions;
  protected url: string;

  constructor(
    public fields: Array<string> = ['tank_id', 'images.preview', 'name', 'nation', 'tier', 'type'],
    public methodBlock: string = 'encyclopedia',
    public methodName: string = 'vehicles',
  ) {
    this.fields = fields;
    this.methodBlock = methodBlock;
    this.methodName = methodName;

    this.parameters = {
      method_block: 'encyclopedia',
      method_name: 'vehicles',
    };

    this.url = `${config.baseURL}/${this.parameters.method_block}/${this.parameters.method_name}/?application_id=${config.appID}`;

    if (this.fields.length !== 0) {
      this.url += `&fields=${this.fields.join('%2C+')}`;
    }
  }

  public async build() {
    try {
      const fetchResponse = await fetch(this.url);

      if (!fetchResponse.ok) {
        throw new Error(`Fetch Error: ${fetchResponse.status}`);
      }

      return await fetchResponse.json();
    } catch (error) {
      throw new Error((<Error>error).message);
    }
  }
}
