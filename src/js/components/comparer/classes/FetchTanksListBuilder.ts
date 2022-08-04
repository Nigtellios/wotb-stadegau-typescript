import appID from '../../../config/secret';

interface ApiOptions {
  server: 'api.wotblitz.eu';
  api_name: 'wotb';
  method_block: 'encyclopedia' | 'clans' | 'account';
  method_name: 'vehicles' | 'vehicleprofile' | 'modules' | 'provisions' | 'info' | 'achievements' | 'crewskills' | 'vehicleprofiles' | 'list';
  tank_id?: number;
  name?: string;
  fields?: Array<string>;
  language?: 'en' | 'pl';
  order_by?: string;
}

export default class FetchTanksListBuilder {
  protected parameters: ApiOptions;

  protected headers: Headers;

  protected url: string;

  constructor() {
    this.parameters = {
      server: 'api.wotblitz.eu',
      api_name: 'wotb',
      method_block: 'encyclopedia',
      method_name: 'vehicles',
    };

    this.headers = new Headers({
      'Content-Type': 'application/json',
    });

    this.url = `https://${this.parameters.server}/${this.parameters.api_name}/${this.parameters.method_block}/${this.parameters.method_name}/?application_id=${appID}`;
  }

  async build() {
    const responseBody = await fetch(this.url);
    const dataObject = await responseBody.json();
    return dataObject;
  }
}
