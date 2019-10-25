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
import WaveItem from './WaveItem';

/**
 * The WaveShipment model module.
 * @module model/WaveShipment
 * @version 5.0
 */
class WaveShipment {
    /**
     * Constructs a new <code>WaveShipment</code>.
     * A shipment (used in getting wave suggestions)
     * @alias module:model/WaveShipment
     * @param orderID {Number} Order Identifier
     * @param shipmentID {Number} Shipment Identifier
     * @param items {Array.<module:model/WaveItem>} List of Items in the shipment
     */
    constructor(orderID, shipmentID, items) { 
        
        WaveShipment.initialize(this, orderID, shipmentID, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderID, shipmentID, items) { 
        obj['orderID'] = orderID;
        obj['shipmentID'] = shipmentID;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>WaveShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WaveShipment} obj Optional instance to populate.
     * @return {module:model/WaveShipment} The populated <code>WaveShipment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WaveShipment();

            if (data.hasOwnProperty('orderID')) {
                obj['orderID'] = ApiClient.convertToType(data['orderID'], 'Number');
            }
            if (data.hasOwnProperty('shipmentID')) {
                obj['shipmentID'] = ApiClient.convertToType(data['shipmentID'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [WaveItem]);
            }
        }
        return obj;
    }


}

/**
 * Order Identifier
 * @member {Number} orderID
 */
WaveShipment.prototype['orderID'] = undefined;

/**
 * Shipment Identifier
 * @member {Number} shipmentID
 */
WaveShipment.prototype['shipmentID'] = undefined;

/**
 * List of Items in the shipment
 * @member {Array.<module:model/WaveItem>} items
 */
WaveShipment.prototype['items'] = undefined;






export default WaveShipment;
