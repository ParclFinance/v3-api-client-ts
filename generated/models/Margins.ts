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
 * @interface Margins
 */
export interface Margins {
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    accumulatedLiquidationFees: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    availableMargin: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    requiredInitialMargin: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    requiredLiquidationFeeMargin: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    requiredMaintenanceMargin: number;
    /**
     * 
     * @type {number}
     * @memberof Margins
     */
    totalRequiredMargin: number;
}

/**
 * Check if a given object implements the Margins interface.
 */
export function instanceOfMargins(value: object): value is Margins {
    if (!('accumulatedLiquidationFees' in value) || value['accumulatedLiquidationFees'] === undefined) return false;
    if (!('availableMargin' in value) || value['availableMargin'] === undefined) return false;
    if (!('requiredInitialMargin' in value) || value['requiredInitialMargin'] === undefined) return false;
    if (!('requiredLiquidationFeeMargin' in value) || value['requiredLiquidationFeeMargin'] === undefined) return false;
    if (!('requiredMaintenanceMargin' in value) || value['requiredMaintenanceMargin'] === undefined) return false;
    if (!('totalRequiredMargin' in value) || value['totalRequiredMargin'] === undefined) return false;
    return true;
}

export function MarginsFromJSON(json: any): Margins {
    return MarginsFromJSONTyped(json, false);
}

export function MarginsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Margins {
    if (json == null) {
        return json;
    }
    return {
        
        'accumulatedLiquidationFees': json['accumulated_liquidation_fees'],
        'availableMargin': json['available_margin'],
        'requiredInitialMargin': json['required_initial_margin'],
        'requiredLiquidationFeeMargin': json['required_liquidation_fee_margin'],
        'requiredMaintenanceMargin': json['required_maintenance_margin'],
        'totalRequiredMargin': json['total_required_margin'],
    };
}

export function MarginsToJSON(value?: Margins | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accumulated_liquidation_fees': value['accumulatedLiquidationFees'],
        'available_margin': value['availableMargin'],
        'required_initial_margin': value['requiredInitialMargin'],
        'required_liquidation_fee_margin': value['requiredLiquidationFeeMargin'],
        'required_maintenance_margin': value['requiredMaintenanceMargin'],
        'total_required_margin': value['totalRequiredMargin'],
    };
}

