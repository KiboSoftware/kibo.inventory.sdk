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
 * The WaveCompletion model module.
 * @module model/WaveCompletion
 * @version 5.0
 */
class WaveCompletion {
    /**
     * Constructs a new <code>WaveCompletion</code>.
     * Wave Completion
     * @alias module:model/WaveCompletion
     */
    constructor() { 
        
        WaveCompletion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WaveCompletion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WaveCompletion} obj Optional instance to populate.
     * @return {module:model/WaveCompletion} The populated <code>WaveCompletion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WaveCompletion();

            if (data.hasOwnProperty('createRecovery')) {
                obj['createRecovery'] = ApiClient.convertToType(data['createRecovery'], 'Boolean');
            }
            if (data.hasOwnProperty('bins')) {
                obj['bins'] = ApiClient.convertToType(data['bins'], [BinProductQuantities]);
            }
        }
        return obj;
    }


}

/**
 * Flag for creating a recovery
 * @member {Boolean} createRecovery
 */
WaveCompletion.prototype['createRecovery'] = undefined;

/**
 * Maximum number of orders
 * @member {Array.<module:model/BinProductQuantities>} bins
 */
WaveCompletion.prototype['bins'] = undefined;






export default WaveCompletion;

