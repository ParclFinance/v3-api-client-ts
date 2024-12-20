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
import type { OracleKind } from './OracleKind';
import {
    OracleKindFromJSON,
    OracleKindFromJSONTyped,
    OracleKindToJSON,
} from './OracleKind';

/**
 * 
 * @export
 * @interface OracleConfig
 */
export interface OracleConfig {
    /**
     * 
     * @type {OracleKind}
     * @memberof OracleConfig
     */
    kind: OracleKind;
    /**
     * 
     * @type {string}
     * @memberof OracleConfig
     */
    programId: string;
}



/**
 * Check if a given object implements the OracleConfig interface.
 */
export function instanceOfOracleConfig(value: object): value is OracleConfig {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('programId' in value) || value['programId'] === undefined) return false;
    return true;
}

export function OracleConfigFromJSON(json: any): OracleConfig {
    return OracleConfigFromJSONTyped(json, false);
}

export function OracleConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): OracleConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': OracleKindFromJSON(json['kind']),
        'programId': json['program_id'],
    };
}

export function OracleConfigToJSON(value?: OracleConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kind': OracleKindToJSON(value['kind']),
        'program_id': value['programId'],
    };
}

