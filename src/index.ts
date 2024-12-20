import {
  AccountsAndMetadataApi,
  InstructionsApi,
  TransactionsApi,
  QuotesApi,
} from "../generated/apis";
import { ConfigurationParameters, Configuration } from "../generated/runtime";

export * from "../generated";

export const DEFAULT_V3_API_URL = "https://v3.parcl-api.com";

export class ParclV3ApiClient {
  public accounts: AccountsAndMetadataApi;
  public instructions: InstructionsApi;
  public transactions: TransactionsApi;
  public quotes: QuotesApi;

  constructor(params?: ConfigurationParameters) {
    if (params === undefined) {
      params = { basePath: DEFAULT_V3_API_URL };
    } else if (params.basePath === undefined) {
      params.basePath = DEFAULT_V3_API_URL;
    }
    const config = new Configuration(params);
    this.accounts = new AccountsAndMetadataApi(config);
    this.instructions = new InstructionsApi(config);
    this.transactions = new TransactionsApi(config);
    this.quotes = new QuotesApi(config);
  }
}
