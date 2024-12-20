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
 * @type ExchangeIdentifier
 * 
 * @export
 */
export type ExchangeIdentifier = number | string;

export function ExchangeIdentifierFromJSON(json: any): ExchangeIdentifier {
    return ExchangeIdentifierFromJSONTyped(json, false);
}

export function ExchangeIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeIdentifier {
    if (json == null) {
        return json;
    }
    if (instanceOfnumber(json)) {
        return numberFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ExchangeIdentifierToJSON(value?: ExchangeIdentifier | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}



function instanceOfnumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}


function numberToJSON(value: number): any {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Invalid number provided for serialization.');
    }
    return value;
}


function instanceOfstring(value: any): boolean {
    return typeof value === 'string';
}


function stringToJSON(value: string): any {
    if (typeof value !== 'string') {
        throw new Error('Invalid string provided for serialization.');
    }
    return value;
}


function stringFromJSONTyped(json: any, ignoreDiscriminator: boolean): string {
    if (typeof json !== 'string') {
        throw new Error('Invalid JSON for string deserialization.');
    }
    return json;
}


function numberFromJSONTyped(json: any, ignoreDiscriminator: boolean): number {
    const parsedNumber = Number(json);
    if (isNaN(parsedNumber)) {
        throw new Error('Invalid JSON for number deserialization.');
    }
    return parsedNumber;
}
