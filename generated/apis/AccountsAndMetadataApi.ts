/* tslint:disable */
/* eslint-disable */
/**
 * v3-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ExchangeInfo,
  MarginAccountInfo,
  MarginAccountsPayload,
  MarketIdentifiersResponse,
  MarketIdentifiersResponseKind,
  MarketInfo,
  MarketsPayload,
} from '../models/index';
import {
    ExchangeInfoFromJSON,
    ExchangeInfoToJSON,
    MarginAccountInfoFromJSON,
    MarginAccountInfoToJSON,
    MarginAccountsPayloadFromJSON,
    MarginAccountsPayloadToJSON,
    MarketIdentifiersResponseFromJSON,
    MarketIdentifiersResponseToJSON,
    MarketIdentifiersResponseKindFromJSON,
    MarketIdentifiersResponseKindToJSON,
    MarketInfoFromJSON,
    MarketInfoToJSON,
    MarketsPayloadFromJSON,
    MarketsPayloadToJSON,
} from '../models/index';

export interface GetExchangeRequest {
    exchangeId?: string | null;
}

export interface GetExponentsRequest {
    exchangeId?: string | null;
}

export interface GetMarginAccountRequest {
    marginAccountId: string;
    owner?: string | null;
    exchangeId?: string | null;
}

export interface GetMarginAccountsRequest {
    marginAccountsPayload: MarginAccountsPayload;
}

export interface GetMarketRequest {
    marketId: string;
    exchangeId?: string | null;
}

export interface GetMarketIdsRequest {
    responseKind?: MarketIdentifiersResponseKind;
    exchangeId?: string | null;
}

export interface GetMarketsRequest {
    marketsPayload: MarketsPayload;
}

export interface GetUnhealthyMarginAccountsRequest {
    exchangeId?: string | null;
}

/**
 * AccountsAndMetadataApi - interface
 * 
 * @export
 * @interface AccountsAndMetadataApiInterface
 */
export interface AccountsAndMetadataApiInterface {
    /**
     * 
     * @summary Get exchange account and related info. Exchange identifier is optional because there is only 1 exchange currently. Exchange ID=0 / Address=82dGS7Jt4Km8ZgwZVRsJ2V6vPXEhVdgDaMP7cqPGG1TW
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getExchangeRaw(requestParameters: GetExchangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExchangeInfo>>;

    /**
     * Get exchange account and related info. Exchange identifier is optional because there is only 1 exchange currently. Exchange ID=0 / Address=82dGS7Jt4Km8ZgwZVRsJ2V6vPXEhVdgDaMP7cqPGG1TW
     */
    getExchange(requestParameters: GetExchangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExchangeInfo>;

    /**
     * 
     * @summary Get exponents for scaling parcl-v3 values by type. Use these exponents in fixed point math or for displaying values. NOTE: \"precise_integer\" is the type for the following: 1) \"last_interaction_funding_per_unit\" field on position objects on the MarginAccount response. 2) \"last_funding_rate\" field on the accounting object on the Market response. 3) \"last_funding_per_unit\" field on the accounting object on the Market response. 4) \"last_funding_per_unit\" field on modify position quote.
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getExponentsRaw(requestParameters: GetExponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: number; }>>;

    /**
     * Get exponents for scaling parcl-v3 values by type. Use these exponents in fixed point math or for displaying values. NOTE: \"precise_integer\" is the type for the following: 1) \"last_interaction_funding_per_unit\" field on position objects on the MarginAccount response. 2) \"last_funding_rate\" field on the accounting object on the Market response. 3) \"last_funding_per_unit\" field on the accounting object on the Market response. 4) \"last_funding_per_unit\" field on modify position quote.
     */
    getExponents(requestParameters: GetExponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: number; }>;

    /**
     * 
     * @summary Get margin account and related info. Filter by margin account by 1) passing in the margin account\'s address or b) passing in both the margin account integer ID and the owner address.
     * @param {string} marginAccountId Either 1) the margin account\&#39;s ID used in its PDA or 2) the margin account\&#39;s full address.
     * @param {string} [owner] Optional: Address of the margin account\&#39;s owner. Owner is only optional if margin_account_id is the full address. This is because the margin account integer ID and the owner address are used together to compute the margin account PDA.
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getMarginAccountRaw(requestParameters: GetMarginAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarginAccountInfo>>;

    /**
     * Get margin account and related info. Filter by margin account by 1) passing in the margin account\'s address or b) passing in both the margin account integer ID and the owner address.
     */
    getMarginAccount(requestParameters: GetMarginAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarginAccountInfo>;

    /**
     * 
     * @summary Get multiple margin accounts and relevant info. Input is an array of margin account addresses. Api removes duplicate addresses. Max input length is 100.
     * @param {MarginAccountsPayload} marginAccountsPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getMarginAccountsRaw(requestParameters: GetMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MarginAccountInfo | null>>>;

    /**
     * Get multiple margin accounts and relevant info. Input is an array of margin account addresses. Api removes duplicate addresses. Max input length is 100.
     */
    getMarginAccounts(requestParameters: GetMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MarginAccountInfo | null>>;

    /**
     * 
     * @summary Get market account and relevant info.
     * @param {string} marketId Either 1) the market\&#39;s ID used in its PDA or 2) the market\&#39;s full address.
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getMarketRaw(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketInfo>>;

    /**
     * Get market account and relevant info.
     */
    getMarket(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketInfo>;

    /**
     * 
     * @summary Get active market identifiers. Filter response to be 1) mapping of integer ID to address 2) integer IDs only 3) addresses only
     * @param {MarketIdentifiersResponseKind} [responseKind] Options for response_kind: 1) \&quot;map\&quot; 2) \&quot;addresses\&quot; 3) \&quot;ids\&quot;. Default is map. \&quot;map\&quot; returns map of ids to addresses. \&quot;addresses\&quot; returns array of addresses. \&quot;ids\&quot; returns array of integer ids.
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getMarketIdsRaw(requestParameters: GetMarketIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketIdentifiersResponse>>;

    /**
     * Get active market identifiers. Filter response to be 1) mapping of integer ID to address 2) integer IDs only 3) addresses only
     */
    getMarketIds(requestParameters: GetMarketIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketIdentifiersResponse>;

    /**
     * 
     * @summary Get multiple market accounts and relevant info. Market IDs input is an array where elements are either 1) a market\'s ID used in its PDA or 2) a market\'s full address. Api ignores invalid market identifiers and removes duplicates.
     * @param {MarketsPayload} marketsPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getMarketsRaw(requestParameters: GetMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MarketInfo>>>;

    /**
     * Get multiple market accounts and relevant info. Market IDs input is an array where elements are either 1) a market\'s ID used in its PDA or 2) a market\'s full address. Api ignores invalid market identifiers and removes duplicates.
     */
    getMarkets(requestParameters: GetMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MarketInfo>>;

    /**
     * 
     * @summary Get unhealthy margin account addresses for liquidation. Returns empty array if there are no uhealthy accounts. Accounts returned from this endpoint may already be liquidated by other bots.
     * @param {string} [exchangeId] Optional: default is exchange ID&#x3D;0 because ID&#x3D;0 is the only live exchange. Either 1) the exchange\&#39;s ID used in its PDA or 2) the exchange\&#39;s full address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsAndMetadataApiInterface
     */
    getUnhealthyMarginAccountsRaw(requestParameters: GetUnhealthyMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Get unhealthy margin account addresses for liquidation. Returns empty array if there are no uhealthy accounts. Accounts returned from this endpoint may already be liquidated by other bots.
     */
    getUnhealthyMarginAccounts(requestParameters: GetUnhealthyMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

}

/**
 * 
 */
export class AccountsAndMetadataApi extends runtime.BaseAPI implements AccountsAndMetadataApiInterface {

    /**
     * Get exchange account and related info. Exchange identifier is optional because there is only 1 exchange currently. Exchange ID=0 / Address=82dGS7Jt4Km8ZgwZVRsJ2V6vPXEhVdgDaMP7cqPGG1TW
     */
    async getExchangeRaw(requestParameters: GetExchangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExchangeInfo>> {
        const queryParameters: any = {};

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/exchange`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExchangeInfoFromJSON(jsonValue));
    }

    /**
     * Get exchange account and related info. Exchange identifier is optional because there is only 1 exchange currently. Exchange ID=0 / Address=82dGS7Jt4Km8ZgwZVRsJ2V6vPXEhVdgDaMP7cqPGG1TW
     */
    async getExchange(requestParameters: GetExchangeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExchangeInfo> {
        const response = await this.getExchangeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get exponents for scaling parcl-v3 values by type. Use these exponents in fixed point math or for displaying values. NOTE: \"precise_integer\" is the type for the following: 1) \"last_interaction_funding_per_unit\" field on position objects on the MarginAccount response. 2) \"last_funding_rate\" field on the accounting object on the Market response. 3) \"last_funding_per_unit\" field on the accounting object on the Market response. 4) \"last_funding_per_unit\" field on modify position quote.
     */
    async getExponentsRaw(requestParameters: GetExponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: number; }>> {
        const queryParameters: any = {};

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/exponents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get exponents for scaling parcl-v3 values by type. Use these exponents in fixed point math or for displaying values. NOTE: \"precise_integer\" is the type for the following: 1) \"last_interaction_funding_per_unit\" field on position objects on the MarginAccount response. 2) \"last_funding_rate\" field on the accounting object on the Market response. 3) \"last_funding_per_unit\" field on the accounting object on the Market response. 4) \"last_funding_per_unit\" field on modify position quote.
     */
    async getExponents(requestParameters: GetExponentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: number; }> {
        const response = await this.getExponentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get margin account and related info. Filter by margin account by 1) passing in the margin account\'s address or b) passing in both the margin account integer ID and the owner address.
     */
    async getMarginAccountRaw(requestParameters: GetMarginAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarginAccountInfo>> {
        if (requestParameters['marginAccountId'] == null) {
            throw new runtime.RequiredError(
                'marginAccountId',
                'Required parameter "marginAccountId" was null or undefined when calling getMarginAccount().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['marginAccountId'] != null) {
            queryParameters['margin_account_id'] = requestParameters['marginAccountId'];
        }

        if (requestParameters['owner'] != null) {
            queryParameters['owner'] = requestParameters['owner'];
        }

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/margin-account`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarginAccountInfoFromJSON(jsonValue));
    }

    /**
     * Get margin account and related info. Filter by margin account by 1) passing in the margin account\'s address or b) passing in both the margin account integer ID and the owner address.
     */
    async getMarginAccount(requestParameters: GetMarginAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarginAccountInfo> {
        const response = await this.getMarginAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get multiple margin accounts and relevant info. Input is an array of margin account addresses. Api removes duplicate addresses. Max input length is 100.
     */
    async getMarginAccountsRaw(requestParameters: GetMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MarginAccountInfo | null>>> {
        if (requestParameters['marginAccountsPayload'] == null) {
            throw new runtime.RequiredError(
                'marginAccountsPayload',
                'Required parameter "marginAccountsPayload" was null or undefined when calling getMarginAccounts().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/margin-accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MarginAccountsPayloadToJSON(requestParameters['marginAccountsPayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MarginAccountInfoFromJSON));
    }

    /**
     * Get multiple margin accounts and relevant info. Input is an array of margin account addresses. Api removes duplicate addresses. Max input length is 100.
     */
    async getMarginAccounts(requestParameters: GetMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MarginAccountInfo | null>> {
        const response = await this.getMarginAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get market account and relevant info.
     */
    async getMarketRaw(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketInfo>> {
        if (requestParameters['marketId'] == null) {
            throw new runtime.RequiredError(
                'marketId',
                'Required parameter "marketId" was null or undefined when calling getMarket().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['marketId'] != null) {
            queryParameters['market_id'] = requestParameters['marketId'];
        }

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/market`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarketInfoFromJSON(jsonValue));
    }

    /**
     * Get market account and relevant info.
     */
    async getMarket(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketInfo> {
        const response = await this.getMarketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get active market identifiers. Filter response to be 1) mapping of integer ID to address 2) integer IDs only 3) addresses only
     */
    async getMarketIdsRaw(requestParameters: GetMarketIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketIdentifiersResponse>> {
        const queryParameters: any = {};

        if (requestParameters['responseKind'] != null) {
            queryParameters['response_kind'] = requestParameters['responseKind'];
        }

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/market-ids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarketIdentifiersResponseFromJSON(jsonValue));
    }

    /**
     * Get active market identifiers. Filter response to be 1) mapping of integer ID to address 2) integer IDs only 3) addresses only
     */
    async getMarketIds(requestParameters: GetMarketIdsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketIdentifiersResponse> {
        const response = await this.getMarketIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get multiple market accounts and relevant info. Market IDs input is an array where elements are either 1) a market\'s ID used in its PDA or 2) a market\'s full address. Api ignores invalid market identifiers and removes duplicates.
     */
    async getMarketsRaw(requestParameters: GetMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MarketInfo>>> {
        if (requestParameters['marketsPayload'] == null) {
            throw new runtime.RequiredError(
                'marketsPayload',
                'Required parameter "marketsPayload" was null or undefined when calling getMarkets().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/markets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MarketsPayloadToJSON(requestParameters['marketsPayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MarketInfoFromJSON));
    }

    /**
     * Get multiple market accounts and relevant info. Market IDs input is an array where elements are either 1) a market\'s ID used in its PDA or 2) a market\'s full address. Api ignores invalid market identifiers and removes duplicates.
     */
    async getMarkets(requestParameters: GetMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MarketInfo>> {
        const response = await this.getMarketsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get unhealthy margin account addresses for liquidation. Returns empty array if there are no uhealthy accounts. Accounts returned from this endpoint may already be liquidated by other bots.
     */
    async getUnhealthyMarginAccountsRaw(requestParameters: GetUnhealthyMarginAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        if (requestParameters['exchangeId'] != null) {
            queryParameters['exchange_id'] = requestParameters['exchangeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/unhealthy-margin-accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get unhealthy margin account addresses for liquidation. Returns empty array if there are no uhealthy accounts. Accounts returned from this endpoint may already be liquidated by other bots.
     */
    async getUnhealthyMarginAccounts(requestParameters: GetUnhealthyMarginAccountsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.getUnhealthyMarginAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
