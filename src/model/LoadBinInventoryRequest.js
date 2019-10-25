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
import BinProductQuantities from './BinProductQuantities';

/**
 * The LoadBinInventoryRequest model module.
 * @module model/LoadBinInventoryRequest
 * @version 5.0
 */
class LoadBinInventoryRequest {
    /**
     * Constructs a new <code>LoadBinInventoryRequest</code>.
     * Request needed for loading bin inventory
     * @alias module:model/LoadBinInventoryRequest
     */
    constructor() { 
        
        LoadBinInventoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoadBinInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadBinInventoryRequest} obj Optional instance to populate.
     * @return {module:model/LoadBinInventoryRequest} The populated <code>LoadBinInventoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadBinInventoryRequest();

            if (data.hasOwnProperty('bins')) {
                obj['bins'] = ApiClient.convertToType(data['bins'], [BinProductQuantities]);
            }
            if (data.hasOwnProperty('dryRun')) {
                obj['dryRun'] = ApiClient.convertToType(data['dryRun'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * List of bins and their associated product quantities
 * @member {Array.<module:model/BinProductQuantities>} bins
 */
LoadBinInventoryRequest.prototype['bins'] = undefined;

/**
 * Flag for dry runs
 * @member {Boolean} dryRun
 */
LoadBinInventoryRequest.prototype['dryRun'] = undefined;






export default LoadBinInventoryRequest;
