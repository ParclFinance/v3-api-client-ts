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
/**
 * 
 * @export
 * @interface ClosePositionPayload
 */
export interface ClosePositionPayload {
    /**
     * Acceptable price else trade fails. Optional.
     * Acceptable price must be scaled up by the pyth price feed's decimals where a price of 240 with expo of -8 would be 24000000000.
     * If acceptable price is not passed in, then slippage tolerance is used. If both are missing, request fails.
     * @type {string}
     * @memberof ClosePositionPayload
     */
    acceptablePrice?: string | null;
    /**
     * Optional: default is exchange ID=0 because ID=0 is the only live exchange.
     * Either 1) the exchange's ID used in its PDA or 2) the exchange's full address.
     * @type {string}
     * @memberof ClosePositionPayload
     */
    exchangeId?: string | null;
    /**
     * Either 1) the margin account's ID used in its PDA or 2) the margin account's full address.
     * @type {string}
     * @memberof ClosePositionPayload
     */
    marginAccountId: string;
    /**
     * Integer ID of the market to trade.
     * @type {number}
     * @memberof ClosePositionPayload
     */
    marketId: number;
    /**
     * Address of the margin account's owner.
     * @type {string}
     * @memberof ClosePositionPayload
     */
    owner: string;
    /**
     * Optional: priority fee percentile as a basis points number where 50th percentile is 5000. Default is 80th percentile.
     * @type {number}
     * @memberof ClosePositionPayload
     */
    priorityFeePercentile?: number | null;
    /**
     * Slippage tolerance is used to derive an acceptable price. Optional.
     * Slippage tolerance is a basis points number passed to API as "200" which means 2% slippage.
     * If slippage tolerance is not passed in, then acceptable price is used. If both are missing, request fails.
     * @type {number}
     * @memberof ClosePositionPayload
     */
    slippageToleranceBps?: number | null;
}

/**
 * Check if a given object implements the ClosePositionPayload interface.
 */
export function instanceOfClosePositionPayload(value: object): value is ClosePositionPayload {
    if (!('marginAccountId' in value) || value['marginAccountId'] === undefined) return false;
    if (!('marketId' in value) || value['marketId'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    return true;
}

export function ClosePositionPayloadFromJSON(json: any): ClosePositionPayload {
    return ClosePositionPayloadFromJSONTyped(json, false);
}

export function ClosePositionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClosePositionPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'acceptablePrice': json['acceptable_price'] == null ? undefined : json['acceptable_price'],
        'exchangeId': json['exchange_id'] == null ? undefined : json['exchange_id'],
        'marginAccountId': json['margin_account_id'],
        'marketId': json['market_id'],
        'owner': json['owner'],
        'priorityFeePercentile': json['priority_fee_percentile'] == null ? undefined : json['priority_fee_percentile'],
        'slippageToleranceBps': json['slippage_tolerance_bps'] == null ? undefined : json['slippage_tolerance_bps'],
    };
}

export function ClosePositionPayloadToJSON(value?: ClosePositionPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'acceptable_price': value['acceptablePrice'],
        'exchange_id': value['exchangeId'],
        'margin_account_id': value['marginAccountId'],
        'market_id': value['marketId'],
        'owner': value['owner'],
        'priority_fee_percentile': value['priorityFeePercentile'],
        'slippage_tolerance_bps': value['slippageToleranceBps'],
    };
}

