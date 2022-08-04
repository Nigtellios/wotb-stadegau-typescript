export interface ApiOptions {
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
