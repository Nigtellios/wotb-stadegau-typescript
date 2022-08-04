import appID from '../../../config/secret';
import { ApiOptions } from '../interfaces/ApiOptions';

export default class FetchTanksListBuilder {
  protected parameters: ApiOptions;

  protected headers: Headers;

  protected url: string;

  constructor(
    public fields?: Array<string>,
  ) {
    this.fields = fields;

    this.parameters = {
      server: 'api.wotblitz.eu',
      api_name: 'wotb',
      method_block: 'encyclopedia',
      method_name: 'vehicles',
    };

    this.headers = new Headers({
      'Content-Type': 'application/json',
    });

    this.url = `https://${this.parameters.server}/${this.parameters.api_name}/${this.parameters.method_block}/${this.parameters.method_name}/?application_id=${appID}&${this.fields}`;
  }

  async build() {
    try {
      const fetchResponse = await fetch(this.url);

      if (!fetchResponse.ok) {
        throw new Error(`Fetch Error: ${fetchResponse.status}`);
      }

      const tanksCollection = await fetchResponse.json();
      return tanksCollection;
    } catch (error) {
      throw new Error((<Error>error).message);
    }
  }
}
