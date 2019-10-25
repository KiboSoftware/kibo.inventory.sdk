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
 * The ItemQuantity model module.
 * @module model/ItemQuantity
 * @version 5.0
 */
class ItemQuantity {
    /**
     * Constructs a new <code>ItemQuantity</code>.
     * Item Quantity Model
     * @alias module:model/ItemQuantity
     */
    constructor() { 
        
        ItemQuantity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemQuantity} obj Optional instance to populate.
     * @return {module:model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemQuantity();

            if (data.hasOwnProperty('partNumber')) {
                obj['partNumber'] = ApiClient.convertToType(data['partNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Part/Product Number
 * @member {String} partNumber
 */
ItemQuantity.prototype['partNumber'] = undefined;

/**
 * Universal Product Code
 * @member {String} upc
 */
ItemQuantity.prototype['upc'] = undefined;

/**
 * Stock Keeping Unit
 * @member {String} sku
 */
ItemQuantity.prototype['sku'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
ItemQuantity.prototype['quantity'] = undefined;






export default ItemQuantity;

