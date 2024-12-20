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
 * @interface TransactionInfo
 */
export interface TransactionInfo {
    /**
     * 
     * @type {number}
     * @memberof TransactionInfo
     */
    cuLimit: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionInfo
     */
    requiredComputeLamports: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionInfo
     */
    requiredRentLamports: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionInfo
     */
    totalRequiredLamports: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionInfo
     */
    transaction: string;
}

/**
 * Check if a given object implements the TransactionInfo interface.
 */
export function instanceOfTransactionInfo(value: object): value is TransactionInfo {
    if (!('cuLimit' in value) || value['cuLimit'] === undefined) return false;
    if (!('requiredComputeLamports' in value) || value['requiredComputeLamports'] === undefined) return false;
    if (!('requiredRentLamports' in value) || value['requiredRentLamports'] === undefined) return false;
    if (!('totalRequiredLamports' in value) || value['totalRequiredLamports'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function TransactionInfoFromJSON(json: any): TransactionInfo {
    return TransactionInfoFromJSONTyped(json, false);
}

export function TransactionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'cuLimit': json['cu_limit'],
        'requiredComputeLamports': json['required_compute_lamports'],
        'requiredRentLamports': json['required_rent_lamports'],
        'totalRequiredLamports': json['total_required_lamports'],
        'transaction': json['transaction'],
    };
}

export function TransactionInfoToJSON(value?: TransactionInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cu_limit': value['cuLimit'],
        'required_compute_lamports': value['requiredComputeLamports'],
        'required_rent_lamports': value['requiredRentLamports'],
        'total_required_lamports': value['totalRequiredLamports'],
        'transaction': value['transaction'],
    };
}

