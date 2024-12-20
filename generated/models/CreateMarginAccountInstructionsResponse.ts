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
import type { Instructions } from './Instructions';
import {
    InstructionsFromJSON,
    InstructionsFromJSONTyped,
    InstructionsToJSON,
} from './Instructions';

/**
 * 
 * @export
 * @interface CreateMarginAccountInstructionsResponse
 */
export interface CreateMarginAccountInstructionsResponse {
    /**
     * 
     * @type {Instructions}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    instructions: Instructions;
    /**
     * 
     * @type {string}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    marginAccountAddress: string;
    /**
     * 
     * @type {number}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    marginAccountId: number;
    /**
     * 
     * @type {number}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    requiredComputeLamports: number;
    /**
     * 
     * @type {number}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    requiredRentLamports: number;
    /**
     * 
     * @type {number}
     * @memberof CreateMarginAccountInstructionsResponse
     */
    totalRequiredLamports: number;
}

/**
 * Check if a given object implements the CreateMarginAccountInstructionsResponse interface.
 */
export function instanceOfCreateMarginAccountInstructionsResponse(value: object): value is CreateMarginAccountInstructionsResponse {
    if (!('instructions' in value) || value['instructions'] === undefined) return false;
    if (!('marginAccountAddress' in value) || value['marginAccountAddress'] === undefined) return false;
    if (!('marginAccountId' in value) || value['marginAccountId'] === undefined) return false;
    if (!('requiredComputeLamports' in value) || value['requiredComputeLamports'] === undefined) return false;
    if (!('requiredRentLamports' in value) || value['requiredRentLamports'] === undefined) return false;
    if (!('totalRequiredLamports' in value) || value['totalRequiredLamports'] === undefined) return false;
    return true;
}

export function CreateMarginAccountInstructionsResponseFromJSON(json: any): CreateMarginAccountInstructionsResponse {
    return CreateMarginAccountInstructionsResponseFromJSONTyped(json, false);
}

export function CreateMarginAccountInstructionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMarginAccountInstructionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'instructions': InstructionsFromJSON(json['instructions']),
        'marginAccountAddress': json['margin_account_address'],
        'marginAccountId': json['margin_account_id'],
        'requiredComputeLamports': json['required_compute_lamports'],
        'requiredRentLamports': json['required_rent_lamports'],
        'totalRequiredLamports': json['total_required_lamports'],
    };
}

export function CreateMarginAccountInstructionsResponseToJSON(value?: CreateMarginAccountInstructionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'instructions': InstructionsToJSON(value['instructions']),
        'margin_account_address': value['marginAccountAddress'],
        'margin_account_id': value['marginAccountId'],
        'required_compute_lamports': value['requiredComputeLamports'],
        'required_rent_lamports': value['requiredRentLamports'],
        'total_required_lamports': value['totalRequiredLamports'],
    };
}

