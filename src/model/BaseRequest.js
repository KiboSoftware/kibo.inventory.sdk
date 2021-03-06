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
 * The BaseRequest model module.
 * @module model/BaseRequest
 * @version 5.0
 */
class BaseRequest {
    /**
     * Constructs a new <code>BaseRequest</code>.
     * Base Request Model
     * @alias module:model/BaseRequest
     */
    constructor() { 
        
        BaseRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseRequest} obj Optional instance to populate.
     * @return {module:model/BaseRequest} The populated <code>BaseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseRequest();

            if (data.hasOwnProperty('locationCode')) {
                obj['locationCode'] = ApiClient.convertToType(data['locationCode'], 'String');
            }
            if (data.hasOwnProperty('userID')) {
                obj['userID'] = ApiClient.convertToType(data['userID'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageNum')) {
                obj['pageNum'] = ApiClient.convertToType(data['pageNum'], 'Number');
            }
            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Location Code
 * @member {String} locationCode
 */
BaseRequest.prototype['locationCode'] = undefined;

/**
 * user id
 * @member {Number} userID
 */
BaseRequest.prototype['userID'] = undefined;

/**
 * how many results to show per page
 * @member {Number} pageSize
 */
BaseRequest.prototype['pageSize'] = undefined;

/**
 * which page to show
 * @member {Number} pageNum
 */
BaseRequest.prototype['pageNum'] = undefined;

/**
 * index to sort results by
 * @member {String} sortBy
 */
BaseRequest.prototype['sortBy'] = undefined;






export default BaseRequest;

