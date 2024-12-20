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
import type { Instruction } from './Instruction';
import {
    InstructionFromJSON,
    InstructionFromJSONTyped,
    InstructionToJSON,
} from './Instruction';

/**
 * 
 * @export
 * @interface Instructions
 */
export interface Instructions {
    /**
     * 
     * @type {Array<Instruction>}
     * @memberof Instructions
     */
    computeBudgetInstructions: Array<Instruction>;
    /**
     * 
     * @type {Array<Instruction>}
     * @memberof Instructions
     */
    v3Instructions: Array<Instruction>;
}

/**
 * Check if a given object implements the Instructions interface.
 */
export function instanceOfInstructions(value: object): value is Instructions {
    if (!('computeBudgetInstructions' in value) || value['computeBudgetInstructions'] === undefined) return false;
    if (!('v3Instructions' in value) || value['v3Instructions'] === undefined) return false;
    return true;
}

export function InstructionsFromJSON(json: any): Instructions {
    return InstructionsFromJSONTyped(json, false);
}

export function InstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Instructions {
    if (json == null) {
        return json;
    }
    return {
        
        'computeBudgetInstructions': ((json['compute_budget_instructions'] as Array<any>).map(InstructionFromJSON)),
        'v3Instructions': ((json['v3_instructions'] as Array<any>).map(InstructionFromJSON)),
    };
}

export function InstructionsToJSON(value?: Instructions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'compute_budget_instructions': ((value['computeBudgetInstructions'] as Array<any>).map(InstructionToJSON)),
        'v3_instructions': ((value['v3Instructions'] as Array<any>).map(InstructionToJSON)),
    };
}

