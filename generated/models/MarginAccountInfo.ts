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
import type { Margins } from './Margins';
import {
    MarginsFromJSON,
    MarginsFromJSONTyped,
    MarginsToJSON,
} from './Margins';
import type { PositionInfo } from './PositionInfo';
import {
    PositionInfoFromJSON,
    PositionInfoFromJSONTyped,
    PositionInfoToJSON,
} from './PositionInfo';

/**
 * 
 * @export
 * @interface MarginAccountInfo
 */
export interface MarginAccountInfo {
    /**
     * 
     * @type {Array<number>}
     * @memberof MarginAccountInfo
     */
    activeMarketIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof MarginAccountInfo
     */
    address: string;
    /**
     * 
     * @type {boolean}
     * @memberof MarginAccountInfo
     */
    canClose: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MarginAccountInfo
     */
    canLiquidate: boolean;
    /**
     * 
     * @type {string}
     * @memberof MarginAccountInfo
     */
    delegate: string;
    /**
     * 
     * @type {number}
     * @memberof MarginAccountInfo
     */
    excessMargin: number;
    /**
     * 
     * @type {string}
     * @memberof MarginAccountInfo
     */
    exchange: string;
    /**
     * 
     * @type {number}
     * @memberof MarginAccountInfo
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof MarginAccountInfo
     */
    inLiquidation: boolean;
    /**
     * 
     * @type {number}
     * @memberof MarginAccountInfo
     */
    margin: number;
    /**
     * 
     * @type {Margins}
     * @memberof MarginAccountInfo
     */
    margins: Margins;
    /**
     * 
     * @type {string}
     * @memberof MarginAccountInfo
     */
    owner: string;
    /**
     * 
     * @type {Array<PositionInfo>}
     * @memberof MarginAccountInfo
     */
    positions: Array<PositionInfo>;
}

/**
 * Check if a given object implements the MarginAccountInfo interface.
 */
export function instanceOfMarginAccountInfo(value: object): value is MarginAccountInfo {
    if (!('activeMarketIds' in value) || value['activeMarketIds'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('canClose' in value) || value['canClose'] === undefined) return false;
    if (!('canLiquidate' in value) || value['canLiquidate'] === undefined) return false;
    if (!('delegate' in value) || value['delegate'] === undefined) return false;
    if (!('excessMargin' in value) || value['excessMargin'] === undefined) return false;
    if (!('exchange' in value) || value['exchange'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('inLiquidation' in value) || value['inLiquidation'] === undefined) return false;
    if (!('margin' in value) || value['margin'] === undefined) return false;
    if (!('margins' in value) || value['margins'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('positions' in value) || value['positions'] === undefined) return false;
    return true;
}

export function MarginAccountInfoFromJSON(json: any): MarginAccountInfo {
    return MarginAccountInfoFromJSONTyped(json, false);
}

export function MarginAccountInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarginAccountInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'activeMarketIds': json['active_market_ids'],
        'address': json['address'],
        'canClose': json['can_close'],
        'canLiquidate': json['can_liquidate'],
        'delegate': json['delegate'],
        'excessMargin': json['excess_margin'],
        'exchange': json['exchange'],
        'id': json['id'],
        'inLiquidation': json['in_liquidation'],
        'margin': json['margin'],
        'margins': MarginsFromJSON(json['margins']),
        'owner': json['owner'],
        'positions': ((json['positions'] as Array<any>).map(PositionInfoFromJSON)),
    };
}

export function MarginAccountInfoToJSON(value?: MarginAccountInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active_market_ids': value['activeMarketIds'],
        'address': value['address'],
        'can_close': value['canClose'],
        'can_liquidate': value['canLiquidate'],
        'delegate': value['delegate'],
        'excess_margin': value['excessMargin'],
        'exchange': value['exchange'],
        'id': value['id'],
        'in_liquidation': value['inLiquidation'],
        'margin': value['margin'],
        'margins': MarginsToJSON(value['margins']),
        'owner': value['owner'],
        'positions': ((value['positions'] as Array<any>).map(PositionInfoToJSON)),
    };
}

