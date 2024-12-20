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
 * @interface MarginAccountsPayload
 */
export interface MarginAccountsPayload {
    /**
     * Optional: default is exchange ID=0 because ID=0 is the only live exchange.
     * Either 1) the exchange's ID used in its PDA or 2) the exchange's full address.
     * @type {string}
     * @memberof MarginAccountsPayload
     */
    exchangeId?: string | null;
    /**
     * Array of margin account addresses.
     * Api removes duplicate identifiers.
     * @type {Array<string>}
     * @memberof MarginAccountsPayload
     */
    marginAccounts: Array<string>;
}

/**
 * Check if a given object implements the MarginAccountsPayload interface.
 */
export function instanceOfMarginAccountsPayload(value: object): value is MarginAccountsPayload {
    if (!('marginAccounts' in value) || value['marginAccounts'] === undefined) return false;
    return true;
}

export function MarginAccountsPayloadFromJSON(json: any): MarginAccountsPayload {
    return MarginAccountsPayloadFromJSONTyped(json, false);
}

export function MarginAccountsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarginAccountsPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'exchangeId': json['exchange_id'] == null ? undefined : json['exchange_id'],
        'marginAccounts': json['margin_accounts'],
    };
}

export function MarginAccountsPayloadToJSON(value?: MarginAccountsPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exchange_id': value['exchangeId'],
        'margin_accounts': value['marginAccounts'],
    };
}

