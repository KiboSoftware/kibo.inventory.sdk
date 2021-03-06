/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AggregateResponse model module.
 * @module model/AggregateResponse
 * @version 5.0
 */
class AggregateResponse {
    /**
     * Constructs a new <code>AggregateResponse</code>.
     * Response for aggregating Inventory
     * @alias module:model/AggregateResponse
     */
    constructor() { 
        
        AggregateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AggregateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateResponse} obj Optional instance to populate.
     * @return {module:model/AggregateResponse} The populated <code>AggregateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggregateResponse();

            if (data.hasOwnProperty('tenantID')) {
                obj['tenantID'] = ApiClient.convertToType(data['tenantID'], 'Number');
            }
            if (data.hasOwnProperty('onHand')) {
                obj['onHand'] = ApiClient.convertToType(data['onHand'], 'Number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('partNumber')) {
                obj['partNumber'] = ApiClient.convertToType(data['partNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('floor')) {
                obj['floor'] = ApiClient.convertToType(data['floor'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Manufacturer Identifier
 * @member {Number} tenantID
 */
AggregateResponse.prototype['tenantID'] = undefined;

/**
 * The quantity the location has in its possession
 * @member {Number} onHand
 */
AggregateResponse.prototype['onHand'] = undefined;

/**
 * The quantity the location has that are available for purchase
 * @member {Number} available
 */
AggregateResponse.prototype['available'] = undefined;

/**
 * Part/Product Number
 * @member {String} partNumber
 */
AggregateResponse.prototype['partNumber'] = undefined;

/**
 * Universal Product Code
 * @member {String} upc
 */
AggregateResponse.prototype['upc'] = undefined;

/**
 * Stock Keeping Unit
 * @member {String} sku
 */
AggregateResponse.prototype['sku'] = undefined;

/**
 * Absolute minimum quantity of this item that should be in stock at any time
 * @member {Number} floor
 */
AggregateResponse.prototype['floor'] = undefined;






export default AggregateResponse;

