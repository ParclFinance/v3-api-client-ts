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
 * @interface CloseMarginAccountPayload
 */
export interface CloseMarginAccountPayload {
    /**
     * Optional: default is exchange ID=0 because ID=0 is the only live exchange.
     * Either 1) the exchange's ID used in its PDA or 2) the exchange's full address.
     * @type {string}
     * @memberof CloseMarginAccountPayload
     */
    exchangeId?: string | null;
    /**
     * Either 1) the margin account's ID used in its PDA or 2) the margin account's full address.
     * @type {string}
     * @memberof CloseMarginAccountPayload
     */
    marginAccountId: string;
    /**
     * Address of the margin account's owner.
     * @type {string}
     * @memberof CloseMarginAccountPayload
     */
    owner: string;
    /**
     * Optional: priority fee percentile as a basis points number where 50th percentile is 5000. Default is 80th percentile.
     * @type {number}
     * @memberof CloseMarginAccountPayload
     */
    priorityFeePercentile?: number | null;
}

/**
 * Check if a given object implements the CloseMarginAccountPayload interface.
 */
export function instanceOfCloseMarginAccountPayload(value: object): value is CloseMarginAccountPayload {
    if (!('marginAccountId' in value) || value['marginAccountId'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    return true;
}

export function CloseMarginAccountPayloadFromJSON(json: any): CloseMarginAccountPayload {
    return CloseMarginAccountPayloadFromJSONTyped(json, false);
}

export function CloseMarginAccountPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloseMarginAccountPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'exchangeId': json['exchange_id'] == null ? undefined : json['exchange_id'],
        'marginAccountId': json['margin_account_id'],
        'owner': json['owner'],
        'priorityFeePercentile': json['priority_fee_percentile'] == null ? undefined : json['priority_fee_percentile'],
    };
}

export function CloseMarginAccountPayloadToJSON(value?: CloseMarginAccountPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exchange_id': value['exchangeId'],
        'margin_account_id': value['marginAccountId'],
        'owner': value['owner'],
        'priority_fee_percentile': value['priorityFeePercentile'],
    };
}

