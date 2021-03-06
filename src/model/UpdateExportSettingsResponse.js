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
 * The UpdateExportSettingsResponse model module.
 * @module model/UpdateExportSettingsResponse
 * @version 5.0
 */
class UpdateExportSettingsResponse {
    /**
     * Constructs a new <code>UpdateExportSettingsResponse</code>.
     * Update Export Settings Response
     * @alias module:model/UpdateExportSettingsResponse
     */
    constructor() { 
        
        UpdateExportSettingsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateExportSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExportSettingsResponse} obj Optional instance to populate.
     * @return {module:model/UpdateExportSettingsResponse} The populated <code>UpdateExportSettingsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExportSettingsResponse();

            if (data.hasOwnProperty('tenantID')) {
                obj['tenantID'] = ApiClient.convertToType(data['tenantID'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Tenant ID
 * @member {Number} tenantID
 */
UpdateExportSettingsResponse.prototype['tenantID'] = undefined;

/**
 * Name
 * @member {String} name
 */
UpdateExportSettingsResponse.prototype['name'] = undefined;






export default UpdateExportSettingsResponse;

