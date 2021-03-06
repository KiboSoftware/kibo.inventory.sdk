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
import AuditItem from './AuditItem';

/**
 * The Audit1 model module.
 * @module model/Audit1
 * @version 5.0
 */
class Audit1 {
    /**
     * Constructs a new <code>Audit1</code>.
     * Audit
     * @alias module:model/Audit1
     */
    constructor() { 
        
        Audit1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Audit1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Audit1} obj Optional instance to populate.
     * @return {module:model/Audit1} The populated <code>Audit1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Audit1();

            if (data.hasOwnProperty('auditID')) {
                obj['auditID'] = ApiClient.convertToType(data['auditID'], 'Number');
            }
            if (data.hasOwnProperty('userID')) {
                obj['userID'] = ApiClient.convertToType(data['userID'], 'Number');
            }
            if (data.hasOwnProperty('locationCode')) {
                obj['locationCode'] = ApiClient.convertToType(data['locationCode'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('dateRequested')) {
                obj['dateRequested'] = ApiClient.convertToType(data['dateRequested'], 'String');
            }
            if (data.hasOwnProperty('dateStarted')) {
                obj['dateStarted'] = ApiClient.convertToType(data['dateStarted'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [AuditItem]);
            }
        }
        return obj;
    }


}

/**
 * Audit identifier
 * @member {Number} auditID
 */
Audit1.prototype['auditID'] = undefined;

/**
 * User identifier
 * @member {Number} userID
 */
Audit1.prototype['userID'] = undefined;

/**
 * Location code
 * @member {String} locationCode
 */
Audit1.prototype['locationCode'] = undefined;

/**
 * Audit status
 * @member {String} status
 */
Audit1.prototype['status'] = undefined;

/**
 * Date the audit was requested
 * @member {String} dateRequested
 */
Audit1.prototype['dateRequested'] = undefined;

/**
 * Date the audit was started
 * @member {String} dateStarted
 */
Audit1.prototype['dateStarted'] = undefined;

/**
 * List of Audit Items
 * @member {Array.<module:model/AuditItem>} items
 */
Audit1.prototype['items'] = undefined;






export default Audit1;

