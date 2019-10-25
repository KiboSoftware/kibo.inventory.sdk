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
 * The ExportSettingsFTP model module.
 * @module model/ExportSettingsFTP
 * @version 5.0
 */
class ExportSettingsFTP {
    /**
     * Constructs a new <code>ExportSettingsFTP</code>.
     * Export Settings FTP
     * @alias module:model/ExportSettingsFTP
     * @param name {String} Export Settings FTP Name
     * @param ftpServer {String} FTP Server Address
     * @param ftpPort {Number} FTP Server Port
     * @param ftpDirectory {String} FTP Server Directory
     */
    constructor(name, ftpServer, ftpPort, ftpDirectory) { 
        
        ExportSettingsFTP.initialize(this, name, ftpServer, ftpPort, ftpDirectory);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, ftpServer, ftpPort, ftpDirectory) { 
        obj['name'] = name;
        obj['ftpServer'] = ftpServer;
        obj['ftpPort'] = ftpPort;
        obj['ftpDirectory'] = ftpDirectory;
    }

    /**
     * Constructs a <code>ExportSettingsFTP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportSettingsFTP} obj Optional instance to populate.
     * @return {module:model/ExportSettingsFTP} The populated <code>ExportSettingsFTP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportSettingsFTP();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('exportSettingsID')) {
                obj['exportSettingsID'] = ApiClient.convertToType(data['exportSettingsID'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ftpServer')) {
                obj['ftpServer'] = ApiClient.convertToType(data['ftpServer'], 'String');
            }
            if (data.hasOwnProperty('ftpPort')) {
                obj['ftpPort'] = ApiClient.convertToType(data['ftpPort'], 'Number');
            }
            if (data.hasOwnProperty('ftpDirectory')) {
                obj['ftpDirectory'] = ApiClient.convertToType(data['ftpDirectory'], 'String');
            }
            if (data.hasOwnProperty('ftpDirectoryControlFile')) {
                obj['ftpDirectoryControlFile'] = ApiClient.convertToType(data['ftpDirectoryControlFile'], 'String');
            }
            if (data.hasOwnProperty('ftpUser')) {
                obj['ftpUser'] = ApiClient.convertToType(data['ftpUser'], 'String');
            }
            if (data.hasOwnProperty('ftpPassword')) {
                obj['ftpPassword'] = ApiClient.convertToType(data['ftpPassword'], 'String');
            }
            if (data.hasOwnProperty('deliveryClass')) {
                obj['deliveryClass'] = ApiClient.convertToType(data['deliveryClass'], 'String');
            }
            if (data.hasOwnProperty('controlFile')) {
                obj['controlFile'] = ApiClient.convertToType(data['controlFile'], 'String');
            }
            if (data.hasOwnProperty('controlFileEmail')) {
                obj['controlFileEmail'] = ApiClient.convertToType(data['controlFileEmail'], 'String');
            }
            if (data.hasOwnProperty('remoteFileName')) {
                obj['remoteFileName'] = ApiClient.convertToType(data['remoteFileName'], 'String');
            }
            if (data.hasOwnProperty('controlFileName')) {
                obj['controlFileName'] = ApiClient.convertToType(data['controlFileName'], 'String');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Flag for Active State
 * @member {Boolean} active
 */
ExportSettingsFTP.prototype['active'] = undefined;

/**
 * Export Settings ID
 * @member {Number} exportSettingsID
 */
ExportSettingsFTP.prototype['exportSettingsID'] = undefined;

/**
 * Export Settings FTP Name
 * @member {String} name
 */
ExportSettingsFTP.prototype['name'] = undefined;

/**
 * FTP Server Address
 * @member {String} ftpServer
 */
ExportSettingsFTP.prototype['ftpServer'] = undefined;

/**
 * FTP Server Port
 * @member {Number} ftpPort
 */
ExportSettingsFTP.prototype['ftpPort'] = undefined;

/**
 * FTP Server Directory
 * @member {String} ftpDirectory
 */
ExportSettingsFTP.prototype['ftpDirectory'] = undefined;

/**
 * FTP Server Control File Directory
 * @member {String} ftpDirectoryControlFile
 */
ExportSettingsFTP.prototype['ftpDirectoryControlFile'] = undefined;

/**
 * FTP Username
 * @member {String} ftpUser
 */
ExportSettingsFTP.prototype['ftpUser'] = undefined;

/**
 * FTP Password
 * @member {String} ftpPassword
 */
ExportSettingsFTP.prototype['ftpPassword'] = undefined;

/**
 * FTP Delivery Class. Defaults to ExportDeliveryDefault
 * @member {String} deliveryClass
 */
ExportSettingsFTP.prototype['deliveryClass'] = undefined;

/**
 * Control File
 * @member {String} controlFile
 */
ExportSettingsFTP.prototype['controlFile'] = undefined;

/**
 * Control File Email
 * @member {String} controlFileEmail
 */
ExportSettingsFTP.prototype['controlFileEmail'] = undefined;

/**
 * Remote File Name
 * @member {String} remoteFileName
 */
ExportSettingsFTP.prototype['remoteFileName'] = undefined;

/**
 * Control File Name
 * @member {String} controlFileName
 */
ExportSettingsFTP.prototype['controlFileName'] = undefined;

/**
 * Endpoint
 * @member {String} endpoint
 */
ExportSettingsFTP.prototype['endpoint'] = undefined;

/**
 * Environment
 * @member {String} environment
 */
ExportSettingsFTP.prototype['environment'] = undefined;






export default ExportSettingsFTP;

