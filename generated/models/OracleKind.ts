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

/**
 * 
 * @export
 * @enum {string}
 */
export enum OracleKind {
    Pyth = 'pyth',
    Parcl = 'parcl',
    PythV2 = 'pyth-v2'
}


export function instanceOfOracleKind(value: any): boolean {
    for (const key in OracleKind) {
        if (Object.prototype.hasOwnProperty.call(OracleKind, key)) {
            if (OracleKind[key as keyof typeof OracleKind] === value) {
                return true;
            }
        }
    }
    return false;
}

export function OracleKindFromJSON(json: any): OracleKind {
    return OracleKindFromJSONTyped(json, false);
}

export function OracleKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): OracleKind {
    return json as OracleKind;
}

export function OracleKindToJSON(value?: OracleKind | null): any {
    return value as any;
}
