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
 * The WaveItem model module.
 * @module model/WaveItem
 * @version 5.0
 */
class WaveItem {
    /**
     * Constructs a new <code>WaveItem</code>.
     * An item quantity used in wave shipments
     * @alias module:model/WaveItem
     * @param orderItemID {Number} Order Item ID
     * @param quantity {Number} Current Quantity of Item
     */
    constructor(orderItemID, quantity) { 
        
        WaveItem.initialize(this, orderItemID, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderItemID, quantity) { 
        obj['orderItemID'] = orderItemID;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>WaveItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WaveItem} obj Optional instance to populate.
     * @return {module:model/WaveItem} The populated <code>WaveItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WaveItem();

            if (data.hasOwnProperty('orderItemID')) {
                obj['orderItemID'] = ApiClient.convertToType(data['orderItemID'], 'Number');
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
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Order Item ID
 * @member {Number} orderItemID
 */
WaveItem.prototype['orderItemID'] = undefined;

/**
 * Part Number
 * @member {String} partNumber
 */
WaveItem.prototype['partNumber'] = undefined;

/**
 * Upc
 * @member {String} upc
 */
WaveItem.prototype['upc'] = undefined;

/**
 * SKU
 * @member {String} sku
 */
WaveItem.prototype['sku'] = undefined;

/**
 * Current Quantity of Item
 * @member {Number} quantity
 */
WaveItem.prototype['quantity'] = undefined;






export default WaveItem;

