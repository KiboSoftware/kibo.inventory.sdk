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
 * The BinStatusModel model module.
 * @module model/BinStatusModel
 * @version 5.0
 */
class BinStatusModel {
    /**
     * Constructs a new <code>BinStatusModel</code>.
     * Status of Bin
     * @alias module:model/BinStatusModel
     */
    constructor() { 
        
        BinStatusModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BinStatusModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BinStatusModel} obj Optional instance to populate.
     * @return {module:model/BinStatusModel} The populated <code>BinStatusModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BinStatusModel();

            if (data.hasOwnProperty('binStatusID')) {
                obj['binStatusID'] = ApiClient.convertToType(data['binStatusID'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Bin Status Identifier
 * @member {Number} binStatusID
 */
BinStatusModel.prototype['binStatusID'] = undefined;

/**
 * Bin Status Description
 * @member {String} description
 */
BinStatusModel.prototype['description'] = undefined;






export default BinStatusModel;

