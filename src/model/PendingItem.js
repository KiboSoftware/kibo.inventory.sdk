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
 * The PendingItem model module.
 * @module model/PendingItem
 * @version 5.0
 */
class PendingItem {
    /**
     * Constructs a new <code>PendingItem</code>.
     * Pending Item
     * @alias module:model/PendingItem
     */
    constructor() { 
        
        PendingItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PendingItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingItem} obj Optional instance to populate.
     * @return {module:model/PendingItem} The populated <code>PendingItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingItem();

            if (data.hasOwnProperty('pendingItemID')) {
                obj['pendingItemID'] = ApiClient.convertToType(data['pendingItemID'], 'Number');
            }
            if (data.hasOwnProperty('orderID')) {
                obj['orderID'] = ApiClient.convertToType(data['orderID'], 'Number');
            }
            if (data.hasOwnProperty('shipmentID')) {
                obj['shipmentID'] = ApiClient.convertToType(data['shipmentID'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
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
            if (data.hasOwnProperty('productID')) {
                obj['productID'] = ApiClient.convertToType(data['productID'], 'Number');
            }
            if (data.hasOwnProperty('toBin')) {
                obj['toBin'] = ApiClient.convertToType(data['toBin'], 'String');
            }
            if (data.hasOwnProperty('toBinID')) {
                obj['toBinID'] = ApiClient.convertToType(data['toBinID'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Pending Item Identifier
 * @member {Number} pendingItemID
 */
PendingItem.prototype['pendingItemID'] = undefined;

/**
 * Order Identifier
 * @member {Number} orderID
 */
PendingItem.prototype['orderID'] = undefined;

/**
 * Shipment Identifier
 * @member {Number} shipmentID
 */
PendingItem.prototype['shipmentID'] = undefined;

/**
 * Pending Item type
 * @member {module:model/PendingItem.TypeEnum} type
 */
PendingItem.prototype['type'] = undefined;

/**
 * The number of items affected for this log entry
 * @member {Number} quantity
 */
PendingItem.prototype['quantity'] = undefined;

/**
 * Part/Product Number
 * @member {String} partNumber
 */
PendingItem.prototype['partNumber'] = undefined;

/**
 * Universal Product Code
 * @member {String} upc
 */
PendingItem.prototype['upc'] = undefined;

/**
 * Stock Keeping Unit
 * @member {String} sku
 */
PendingItem.prototype['sku'] = undefined;

/**
 * Product Identifier
 * @member {Number} productID
 */
PendingItem.prototype['productID'] = undefined;

/**
 * To Bin ID
 * @member {String} toBin
 */
PendingItem.prototype['toBin'] = undefined;

/**
 * To Bin ID
 * @member {Number} toBinID
 */
PendingItem.prototype['toBinID'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PendingItem['TypeEnum'] = {

    /**
     * value: "TYPE_BIN"
     * @const
     */
    "BIN": "TYPE_BIN",

    /**
     * value: "TYPE_DC"
     * @const
     */
    "DC": "TYPE_DC",

    /**
     * value: "TYPE_AUDIT"
     * @const
     */
    "AUDIT": "TYPE_AUDIT",

    /**
     * value: "TYPE_RESTOCK"
     * @const
     */
    "RESTOCK": "TYPE_RESTOCK"
};



export default PendingItem;
