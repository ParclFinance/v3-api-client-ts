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
import type { PriceFeedInfo } from './PriceFeedInfo';
import {
    PriceFeedInfoFromJSON,
    PriceFeedInfoFromJSONTyped,
    PriceFeedInfoToJSON,
} from './PriceFeedInfo';
import type { MarketInfoAccounting } from './MarketInfoAccounting';
import {
    MarketInfoAccountingFromJSON,
    MarketInfoAccountingFromJSONTyped,
    MarketInfoAccountingToJSON,
} from './MarketInfoAccounting';
import type { MarketInfoSettings } from './MarketInfoSettings';
import {
    MarketInfoSettingsFromJSON,
    MarketInfoSettingsFromJSONTyped,
    MarketInfoSettingsToJSON,
} from './MarketInfoSettings';

/**
 * 
 * @export
 * @interface MarketInfo
 */
export interface MarketInfo {
    /**
     * 
     * @type {MarketInfoAccounting}
     * @memberof MarketInfo
     */
    accounting: MarketInfoAccounting;
    /**
     * 
     * @type {string}
     * @memberof MarketInfo
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof MarketInfo
     */
    exchange: string;
    /**
     * 
     * @type {number}
     * @memberof MarketInfo
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof MarketInfo
     */
    priceFeed: string;
    /**
     * 
     * @type {PriceFeedInfo}
     * @memberof MarketInfo
     */
    priceFeedInfo: PriceFeedInfo;
    /**
     * 
     * @type {MarketInfoSettings}
     * @memberof MarketInfo
     */
    settings: MarketInfoSettings;
    /**
     * 
     * @type {number}
     * @memberof MarketInfo
     */
    status: number;
}

/**
 * Check if a given object implements the MarketInfo interface.
 */
export function instanceOfMarketInfo(value: object): value is MarketInfo {
    if (!('accounting' in value) || value['accounting'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('exchange' in value) || value['exchange'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('priceFeed' in value) || value['priceFeed'] === undefined) return false;
    if (!('priceFeedInfo' in value) || value['priceFeedInfo'] === undefined) return false;
    if (!('settings' in value) || value['settings'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function MarketInfoFromJSON(json: any): MarketInfo {
    return MarketInfoFromJSONTyped(json, false);
}

export function MarketInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'accounting': MarketInfoAccountingFromJSON(json['accounting']),
        'address': json['address'],
        'exchange': json['exchange'],
        'id': json['id'],
        'priceFeed': json['price_feed'],
        'priceFeedInfo': PriceFeedInfoFromJSON(json['price_feed_info']),
        'settings': MarketInfoSettingsFromJSON(json['settings']),
        'status': json['status'],
    };
}

export function MarketInfoToJSON(value?: MarketInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounting': MarketInfoAccountingToJSON(value['accounting']),
        'address': value['address'],
        'exchange': value['exchange'],
        'id': value['id'],
        'price_feed': value['priceFeed'],
        'price_feed_info': PriceFeedInfoToJSON(value['priceFeedInfo']),
        'settings': MarketInfoSettingsToJSON(value['settings']),
        'status': value['status'],
    };
}

