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

import { mapValues } from '../runtime';
import type { MarketIdentifier } from './MarketIdentifier';
import {
    MarketIdentifierFromJSON,
    MarketIdentifierFromJSONTyped,
    MarketIdentifierToJSON,
} from './MarketIdentifier';

/**
 * 
 * @export
 * @interface MarketsPayload
 */
export interface MarketsPayload {
    /**
     * Optional: default is exchange ID=0 because ID=0 is the only live exchange.
     * Either 1) the exchange's ID used in its PDA or 2) the exchange's full address.
     * @type {string}
     * @memberof MarketsPayload
     */
    exchangeId?: string | null;
    /**
     * Array where elements are either 1) a market's ID used in its PDA or 2) a market's full address.
     * Api removes duplicate market identifiers.
     * @type {Array<MarketIdentifier>}
     * @memberof MarketsPayload
     */
    marketIds: Array<MarketIdentifier>;
}

/**
 * Check if a given object implements the MarketsPayload interface.
 */
export function instanceOfMarketsPayload(value: object): value is MarketsPayload {
    if (!('marketIds' in value) || value['marketIds'] === undefined) return false;
    return true;
}

export function MarketsPayloadFromJSON(json: any): MarketsPayload {
    return MarketsPayloadFromJSONTyped(json, false);
}

export function MarketsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketsPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'exchangeId': json['exchange_id'] == null ? undefined : json['exchange_id'],
        'marketIds': ((json['market_ids'] as Array<any>).map(MarketIdentifierFromJSON)),
    };
}

export function MarketsPayloadToJSON(value?: MarketsPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exchange_id': value['exchangeId'],
        'market_ids': ((value['marketIds'] as Array<any>).map(MarketIdentifierToJSON)),
    };
}
