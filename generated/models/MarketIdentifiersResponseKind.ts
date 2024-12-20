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
export enum MarketIdentifiersResponseKind {
    Map = 'map',
    Addresses = 'addresses',
    Ids = 'ids'
}


export function instanceOfMarketIdentifiersResponseKind(value: any): boolean {
    for (const key in MarketIdentifiersResponseKind) {
        if (Object.prototype.hasOwnProperty.call(MarketIdentifiersResponseKind, key)) {
            if (MarketIdentifiersResponseKind[key as keyof typeof MarketIdentifiersResponseKind] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MarketIdentifiersResponseKindFromJSON(json: any): MarketIdentifiersResponseKind {
    return MarketIdentifiersResponseKindFromJSONTyped(json, false);
}

export function MarketIdentifiersResponseKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketIdentifiersResponseKind {
    return json as MarketIdentifiersResponseKind;
}

export function MarketIdentifiersResponseKindToJSON(value?: MarketIdentifiersResponseKind | null): any {
    return value as any;
}
