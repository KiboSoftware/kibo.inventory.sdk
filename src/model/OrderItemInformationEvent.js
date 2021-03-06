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
 * The OrderItemInformationEvent model module.
 * @module model/OrderItemInformationEvent
 * @version 5.0
 */
class OrderItemInformationEvent {
    /**
     * Constructs a new <code>OrderItemInformationEvent</code>.
     * Order Item Information Event
     * @alias module:model/OrderItemInformationEvent
     */
    constructor() { 
        
        OrderItemInformationEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemInformationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderItemInformationEvent} obj Optional instance to populate.
     * @return {module:model/OrderItemInformationEvent} The populated <code>OrderItemInformationEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemInformationEvent();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date of the event
 * @member {String} date
 */
OrderItemInformationEvent.prototype['date'] = undefined;

/**
 * Type of event
 * @member {module:model/OrderItemInformationEvent.EventTypeEnum} eventType
 */
OrderItemInformationEvent.prototype['eventType'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
OrderItemInformationEvent.prototype['quantity'] = undefined;





/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */
OrderItemInformationEvent['EventTypeEnum'] = {

    /**
     * value: "ALLOCATED"
     * @const
     */
    "ALLOCATED": "ALLOCATED",

    /**
     * value: "DEALLOCATED"
     * @const
     */
    "DEALLOCATED": "DEALLOCATED",

    /**
     * value: "FULFILLED"
     * @const
     */
    "FULFILLED": "FULFILLED",

    /**
     * value: "PICKED"
     * @const
     */
    "PICKED": "PICKED",

    /**
     * value: "DEALLOCATE_FULFILL"
     * @const
     */
    "DEALLOCATE_FULFILL": "DEALLOCATE_FULFILL"
};



export default OrderItemInformationEvent;

