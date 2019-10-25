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
import Item from './Item';

/**
 * The AggregateRequest model module.
 * @module model/AggregateRequest
 * @version 5.0
 */
class AggregateRequest {
    /**
     * Constructs a new <code>AggregateRequest</code>.
     * Request for aggregating inventory
     * @alias module:model/AggregateRequest
     * @param items {Array.<module:model/Item>} List of Items to search on
     */
    constructor(items) { 
        
        AggregateRequest.initialize(this, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items) { 
        obj['items'] = items;
    }

    /**
     * Constructs a <code>AggregateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateRequest} obj Optional instance to populate.
     * @return {module:model/AggregateRequest} The populated <code>AggregateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggregateRequest();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('ignoreSafetyStock')) {
                obj['ignoreSafetyStock'] = ApiClient.convertToType(data['ignoreSafetyStock'], 'Boolean');
            }
            if (data.hasOwnProperty('includeNegativeInventory')) {
                obj['includeNegativeInventory'] = ApiClient.convertToType(data['includeNegativeInventory'], 'Boolean');
            }
            if (data.hasOwnProperty('directShip')) {
                obj['directShip'] = ApiClient.convertToType(data['directShip'], 'Boolean');
            }
            if (data.hasOwnProperty('transferEnabled')) {
                obj['transferEnabled'] = ApiClient.convertToType(data['transferEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('pickup')) {
                obj['pickup'] = ApiClient.convertToType(data['pickup'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * List of Items to search on
 * @member {Array.<module:model/Item>} items
 */
AggregateRequest.prototype['items'] = undefined;

/**
 * Whether to ignore the safety stock buffer put in place
 * @member {Boolean} ignoreSafetyStock
 */
AggregateRequest.prototype['ignoreSafetyStock'] = undefined;

/**
 * Whether to allow items with negative inventory in the results
 * @member {Boolean} includeNegativeInventory
 */
AggregateRequest.prototype['includeNegativeInventory'] = undefined;

/**
 * Whether to limit results to locations that are shipping enabled
 * @member {Boolean} directShip
 */
AggregateRequest.prototype['directShip'] = undefined;

/**
 * Filter results by locations that apply tax (true) or don't (false)
 * @member {Boolean} transferEnabled
 */
AggregateRequest.prototype['transferEnabled'] = undefined;

/**
 * Filter results by pickup enabled (true) or not (false)
 * @member {Boolean} pickup
 */
AggregateRequest.prototype['pickup'] = undefined;






export default AggregateRequest;
