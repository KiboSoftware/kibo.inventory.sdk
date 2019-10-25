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
 * The ExportInventoryJobResponse model module.
 * @module model/ExportInventoryJobResponse
 * @version 5.0
 */
class ExportInventoryJobResponse {
    /**
     * Constructs a new <code>ExportInventoryJobResponse</code>.
     * Response for each export job creation
     * @alias module:model/ExportInventoryJobResponse
     */
    constructor() { 
        
        ExportInventoryJobResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportInventoryJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportInventoryJobResponse} obj Optional instance to populate.
     * @return {module:model/ExportInventoryJobResponse} The populated <code>ExportInventoryJobResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportInventoryJobResponse();

            if (data.hasOwnProperty('exportSettingsID')) {
                obj['exportSettingsID'] = ApiClient.convertToType(data['exportSettingsID'], 'Number');
            }
            if (data.hasOwnProperty('jobID')) {
                obj['jobID'] = ApiClient.convertToType(data['jobID'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Export Settings ID
 * @member {Number} exportSettingsID
 */
ExportInventoryJobResponse.prototype['exportSettingsID'] = undefined;

/**
 * ID of newly created job
 * @member {Number} jobID
 */
ExportInventoryJobResponse.prototype['jobID'] = undefined;






export default ExportInventoryJobResponse;
