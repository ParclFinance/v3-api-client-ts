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
import type { AccountMeta } from './AccountMeta';
import {
    AccountMetaFromJSON,
    AccountMetaFromJSONTyped,
    AccountMetaToJSON,
} from './AccountMeta';

/**
 * 
 * @export
 * @interface Instruction
 */
export interface Instruction {
    /**
     * 
     * @type {Array<AccountMeta>}
     * @memberof Instruction
     */
    accounts: Array<AccountMeta>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Instruction
     */
    data: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Instruction
     */
    programId: string;
}

/**
 * Check if a given object implements the Instruction interface.
 */
export function instanceOfInstruction(value: object): value is Instruction {
    if (!('accounts' in value) || value['accounts'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('programId' in value) || value['programId'] === undefined) return false;
    return true;
}

export function InstructionFromJSON(json: any): Instruction {
    return InstructionFromJSONTyped(json, false);
}

export function InstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Instruction {
    if (json == null) {
        return json;
    }
    return {
        
        'accounts': ((json['accounts'] as Array<any>).map(AccountMetaFromJSON)),
        'data': json['data'],
        'programId': json['program_id'],
    };
}

export function InstructionToJSON(value?: Instruction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounts': ((value['accounts'] as Array<any>).map(AccountMetaToJSON)),
        'data': value['data'],
        'program_id': value['programId'],
    };
}
