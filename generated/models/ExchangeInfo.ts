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
import type { ExchangeInfoAccounting } from './ExchangeInfoAccounting';
import {
    ExchangeInfoAccountingFromJSON,
    ExchangeInfoAccountingFromJSONTyped,
    ExchangeInfoAccountingToJSON,
} from './ExchangeInfoAccounting';
import type { ExchangeInfoSettings } from './ExchangeInfoSettings';
import {
    ExchangeInfoSettingsFromJSON,
    ExchangeInfoSettingsFromJSONTyped,
    ExchangeInfoSettingsToJSON,
} from './ExchangeInfoSettings';
import type { OracleConfig } from './OracleConfig';
import {
    OracleConfigFromJSON,
    OracleConfigFromJSONTyped,
    OracleConfigToJSON,
} from './OracleConfig';

/**
 * 
 * @export
 * @interface ExchangeInfo
 */
export interface ExchangeInfo {
    /**
     * 
     * @type {ExchangeInfoAccounting}
     * @memberof ExchangeInfo
     */
    accounting: ExchangeInfoAccounting;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    admin: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    authorizedProtocolFeesCollector: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    authorizedSettler: string;
    /**
     * 
     * @type {number}
     * @memberof ExchangeInfo
     */
    collateralExpo: number;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    collateralMint: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    collateralVault: string;
    /**
     * 
     * @type {number}
     * @memberof ExchangeInfo
     */
    id: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExchangeInfo
     */
    marketIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ExchangeInfo
     */
    nominatedAdmin: string;
    /**
     * 
     * @type {Array<OracleConfig>}
     * @memberof ExchangeInfo
     */
    oracleConfigs: Array<OracleConfig>;
    /**
     * 
     * @type {ExchangeInfoSettings}
     * @memberof ExchangeInfo
     */
    settings: ExchangeInfoSettings;
    /**
     * 
     * @type {number}
     * @memberof ExchangeInfo
     */
    status: number;
}

/**
 * Check if a given object implements the ExchangeInfo interface.
 */
export function instanceOfExchangeInfo(value: object): value is ExchangeInfo {
    if (!('accounting' in value) || value['accounting'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('admin' in value) || value['admin'] === undefined) return false;
    if (!('authorizedProtocolFeesCollector' in value) || value['authorizedProtocolFeesCollector'] === undefined) return false;
    if (!('authorizedSettler' in value) || value['authorizedSettler'] === undefined) return false;
    if (!('collateralExpo' in value) || value['collateralExpo'] === undefined) return false;
    if (!('collateralMint' in value) || value['collateralMint'] === undefined) return false;
    if (!('collateralVault' in value) || value['collateralVault'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('marketIds' in value) || value['marketIds'] === undefined) return false;
    if (!('nominatedAdmin' in value) || value['nominatedAdmin'] === undefined) return false;
    if (!('oracleConfigs' in value) || value['oracleConfigs'] === undefined) return false;
    if (!('settings' in value) || value['settings'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ExchangeInfoFromJSON(json: any): ExchangeInfo {
    return ExchangeInfoFromJSONTyped(json, false);
}

export function ExchangeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'accounting': ExchangeInfoAccountingFromJSON(json['accounting']),
        'address': json['address'],
        'admin': json['admin'],
        'authorizedProtocolFeesCollector': json['authorized_protocol_fees_collector'],
        'authorizedSettler': json['authorized_settler'],
        'collateralExpo': json['collateral_expo'],
        'collateralMint': json['collateral_mint'],
        'collateralVault': json['collateral_vault'],
        'id': json['id'],
        'marketIds': json['market_ids'],
        'nominatedAdmin': json['nominated_admin'],
        'oracleConfigs': ((json['oracle_configs'] as Array<any>).map(OracleConfigFromJSON)),
        'settings': ExchangeInfoSettingsFromJSON(json['settings']),
        'status': json['status'],
    };
}

export function ExchangeInfoToJSON(value?: ExchangeInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounting': ExchangeInfoAccountingToJSON(value['accounting']),
        'address': value['address'],
        'admin': value['admin'],
        'authorized_protocol_fees_collector': value['authorizedProtocolFeesCollector'],
        'authorized_settler': value['authorizedSettler'],
        'collateral_expo': value['collateralExpo'],
        'collateral_mint': value['collateralMint'],
        'collateral_vault': value['collateralVault'],
        'id': value['id'],
        'market_ids': value['marketIds'],
        'nominated_admin': value['nominatedAdmin'],
        'oracle_configs': ((value['oracleConfigs'] as Array<any>).map(OracleConfigToJSON)),
        'settings': ExchangeInfoSettingsToJSON(value['settings']),
        'status': value['status'],
    };
}
