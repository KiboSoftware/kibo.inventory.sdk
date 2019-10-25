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
import WaveSuggestionShipment from './WaveSuggestionShipment';

/**
 * The WaveSuggestionResponse model module.
 * @module model/WaveSuggestionResponse
 * @version 5.0
 */
class WaveSuggestionResponse {
    /**
     * Constructs a new <code>WaveSuggestionResponse</code>.
     * Wave suggestion response
     * @alias module:model/WaveSuggestionResponse
     */
    constructor() { 
        
        WaveSuggestionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WaveSuggestionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WaveSuggestionResponse} obj Optional instance to populate.
     * @return {module:model/WaveSuggestionResponse} The populated <code>WaveSuggestionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WaveSuggestionResponse();

            if (data.hasOwnProperty('shipments')) {
                obj['shipments'] = ApiClient.convertToType(data['shipments'], [WaveSuggestionShipment]);
            }
        }
        return obj;
    }


}

/**
 * List of wave shipment suggestions
 * @member {Array.<module:model/WaveSuggestionShipment>} shipments
 */
WaveSuggestionResponse.prototype['shipments'] = undefined;






export default WaveSuggestionResponse;

