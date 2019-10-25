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
 * The FetchFileConfigRequest model module.
 * @module model/FetchFileConfigRequest
 * @version 5.0
 */
class FetchFileConfigRequest {
    /**
     * Constructs a new <code>FetchFileConfigRequest</code>.
     * Request for Fetch File Configs
     * @alias module:model/FetchFileConfigRequest
     * @param active {Boolean} Flag for active state
     * @param ftpServer {String} FTP server address
     * @param ftpUsername {String} FTP server username
     * @param ftpPassword {String} FTP server password
     * @param ftpRemotePath {String} FTP server remote path
     * @param lockName {String} Lock name
     * @param postProcessAction {Number} Enum denoting action post processing
     */
    constructor(active, ftpServer, ftpUsername, ftpPassword, ftpRemotePath, lockName, postProcessAction) { 
        
        FetchFileConfigRequest.initialize(this, active, ftpServer, ftpUsername, ftpPassword, ftpRemotePath, lockName, postProcessAction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, ftpServer, ftpUsername, ftpPassword, ftpRemotePath, lockName, postProcessAction) { 
        obj['active'] = active;
        obj['ftpServer'] = ftpServer;
        obj['ftpUsername'] = ftpUsername;
        obj['ftpPassword'] = ftpPassword;
        obj['ftpRemotePath'] = ftpRemotePath;
        obj['lockName'] = lockName;
        obj['postProcessAction'] = postProcessAction;
    }

    /**
     * Constructs a <code>FetchFileConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FetchFileConfigRequest} obj Optional instance to populate.
     * @return {module:model/FetchFileConfigRequest} The populated <code>FetchFileConfigRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FetchFileConfigRequest();

            if (data.hasOwnProperty('fetchFileConfigID')) {
                obj['fetchFileConfigID'] = ApiClient.convertToType(data['fetchFileConfigID'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('emailList')) {
                obj['emailList'] = ApiClient.convertToType(data['emailList'], 'String');
            }
            if (data.hasOwnProperty('refreshEnabled')) {
                obj['refreshEnabled'] = ApiClient.convertToType(data['refreshEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('refreshFileDescription')) {
                obj['refreshFileDescription'] = ApiClient.convertToType(data['refreshFileDescription'], 'String');
            }
            if (data.hasOwnProperty('updateEnabled')) {
                obj['updateEnabled'] = ApiClient.convertToType(data['updateEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('updateFileDescription')) {
                obj['updateFileDescription'] = ApiClient.convertToType(data['updateFileDescription'], 'String');
            }
            if (data.hasOwnProperty('ftpServer')) {
                obj['ftpServer'] = ApiClient.convertToType(data['ftpServer'], 'String');
            }
            if (data.hasOwnProperty('ftpUsername')) {
                obj['ftpUsername'] = ApiClient.convertToType(data['ftpUsername'], 'String');
            }
            if (data.hasOwnProperty('ftpPassword')) {
                obj['ftpPassword'] = ApiClient.convertToType(data['ftpPassword'], 'String');
            }
            if (data.hasOwnProperty('ftpPort')) {
                obj['ftpPort'] = ApiClient.convertToType(data['ftpPort'], 'Number');
            }
            if (data.hasOwnProperty('ftpRemotePath')) {
                obj['ftpRemotePath'] = ApiClient.convertToType(data['ftpRemotePath'], 'String');
            }
            if (data.hasOwnProperty('ftpRemotePathArchive')) {
                obj['ftpRemotePathArchive'] = ApiClient.convertToType(data['ftpRemotePathArchive'], 'String');
            }
            if (data.hasOwnProperty('lockName')) {
                obj['lockName'] = ApiClient.convertToType(data['lockName'], 'String');
            }
            if (data.hasOwnProperty('postProcessAction')) {
                obj['postProcessAction'] = ApiClient.convertToType(data['postProcessAction'], 'Number');
            }
            if (data.hasOwnProperty('useControlFile')) {
                obj['useControlFile'] = ApiClient.convertToType(data['useControlFile'], 'Boolean');
            }
            if (data.hasOwnProperty('multipleFiles')) {
                obj['multipleFiles'] = ApiClient.convertToType(data['multipleFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('zeroOutNegatives')) {
                obj['zeroOutNegatives'] = ApiClient.convertToType(data['zeroOutNegatives'], 'Boolean');
            }
            if (data.hasOwnProperty('testFTPConfigs')) {
                obj['testFTPConfigs'] = ApiClient.convertToType(data['testFTPConfigs'], 'Boolean');
            }
            if (data.hasOwnProperty('fieldNameMap')) {
                obj['fieldNameMap'] = ApiClient.convertToType(data['fieldNameMap'], ['String']);
            }
            if (data.hasOwnProperty('ignoreExtraFields')) {
                obj['ignoreExtraFields'] = ApiClient.convertToType(data['ignoreExtraFields'], 'Boolean');
            }
            if (data.hasOwnProperty('blankQuantityIsZero')) {
                obj['blankQuantityIsZero'] = ApiClient.convertToType(data['blankQuantityIsZero'], 'Boolean');
            }
            if (data.hasOwnProperty('csvDelimiter')) {
                obj['csvDelimiter'] = ApiClient.convertToType(data['csvDelimiter'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Fetch File Config ID
 * @member {Number} fetchFileConfigID
 */
FetchFileConfigRequest.prototype['fetchFileConfigID'] = undefined;

/**
 * Flag for active state
 * @member {Boolean} active
 */
FetchFileConfigRequest.prototype['active'] = undefined;

/**
 * Email List
 * @member {String} emailList
 */
FetchFileConfigRequest.prototype['emailList'] = undefined;

/**
 * Flag for Refresh Enabled
 * @member {Boolean} refreshEnabled
 */
FetchFileConfigRequest.prototype['refreshEnabled'] = undefined;

/**
 * Description for the refresh file
 * @member {String} refreshFileDescription
 */
FetchFileConfigRequest.prototype['refreshFileDescription'] = undefined;

/**
 * Flag for Update Enabled
 * @member {Boolean} updateEnabled
 */
FetchFileConfigRequest.prototype['updateEnabled'] = undefined;

/**
 * Description for the update file
 * @member {String} updateFileDescription
 */
FetchFileConfigRequest.prototype['updateFileDescription'] = undefined;

/**
 * FTP server address
 * @member {String} ftpServer
 */
FetchFileConfigRequest.prototype['ftpServer'] = undefined;

/**
 * FTP server username
 * @member {String} ftpUsername
 */
FetchFileConfigRequest.prototype['ftpUsername'] = undefined;

/**
 * FTP server password
 * @member {String} ftpPassword
 */
FetchFileConfigRequest.prototype['ftpPassword'] = undefined;

/**
 * FTP server port
 * @member {Number} ftpPort
 */
FetchFileConfigRequest.prototype['ftpPort'] = undefined;

/**
 * FTP server remote path
 * @member {String} ftpRemotePath
 */
FetchFileConfigRequest.prototype['ftpRemotePath'] = undefined;

/**
 * FTP server remote path archive
 * @member {String} ftpRemotePathArchive
 */
FetchFileConfigRequest.prototype['ftpRemotePathArchive'] = undefined;

/**
 * Lock name
 * @member {String} lockName
 */
FetchFileConfigRequest.prototype['lockName'] = undefined;

/**
 * Enum denoting action post processing
 * @member {Number} postProcessAction
 */
FetchFileConfigRequest.prototype['postProcessAction'] = undefined;

/**
 * Flag for using control file
 * @member {Boolean} useControlFile
 */
FetchFileConfigRequest.prototype['useControlFile'] = undefined;

/**
 * Flag for using multiple files
 * @member {Boolean} multipleFiles
 */
FetchFileConfigRequest.prototype['multipleFiles'] = undefined;

/**
 * Flag for converting negatives to zero
 * @member {Boolean} zeroOutNegatives
 */
FetchFileConfigRequest.prototype['zeroOutNegatives'] = undefined;

/**
 * Flag for if its a test ftp config
 * @member {Boolean} testFTPConfigs
 */
FetchFileConfigRequest.prototype['testFTPConfigs'] = undefined;

/**
 * List of field names
 * @member {Array.<String>} fieldNameMap
 */
FetchFileConfigRequest.prototype['fieldNameMap'] = undefined;

/**
 * Flag for ignoring extra fields
 * @member {Boolean} ignoreExtraFields
 */
FetchFileConfigRequest.prototype['ignoreExtraFields'] = undefined;

/**
 * Flag to convert null quantities to zero
 * @member {Boolean} blankQuantityIsZero
 */
FetchFileConfigRequest.prototype['blankQuantityIsZero'] = undefined;

/**
 * Delimiter
 * @member {String} csvDelimiter
 */
FetchFileConfigRequest.prototype['csvDelimiter'] = undefined;






export default FetchFileConfigRequest;

