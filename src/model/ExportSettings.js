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
import ExportSettingsFTP from './ExportSettingsFTP';
import ExportSettingsS3 from './ExportSettingsS3';

/**
 * The ExportSettings model module.
 * @module model/ExportSettings
 * @version 5.0
 */
class ExportSettings {
    /**
     * Constructs a new <code>ExportSettings</code>.
     * Export Settings
     * @alias module:model/ExportSettings
     * @param name {String} Export Settings Name
     * @param fileFormat {module:model/ExportSettings.FileFormatEnum} Format for the export file
     * @param exportType {module:model/ExportSettings.ExportTypeEnum} Type of exportGG for the settings
     * @param ftpInformation {Array.<module:model/ExportSettingsFTP>} List of export FTP settings
     */
    constructor(name, fileFormat, exportType, ftpInformation) { 
        
        ExportSettings.initialize(this, name, fileFormat, exportType, ftpInformation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, fileFormat, exportType, ftpInformation) { 
        obj['name'] = name;
        obj['fileFormat'] = fileFormat;
        obj['exportType'] = exportType;
        obj['ftpInformation'] = ftpInformation;
    }

    /**
     * Constructs a <code>ExportSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportSettings} obj Optional instance to populate.
     * @return {module:model/ExportSettings} The populated <code>ExportSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportSettings();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fileFormat')) {
                obj['fileFormat'] = ApiClient.convertToType(data['fileFormat'], 'String');
            }
            if (data.hasOwnProperty('exportType')) {
                obj['exportType'] = ApiClient.convertToType(data['exportType'], 'String');
            }
            if (data.hasOwnProperty('onlySendAvailable')) {
                obj['onlySendAvailable'] = ApiClient.convertToType(data['onlySendAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('onlySendActiveLocations')) {
                obj['onlySendActiveLocations'] = ApiClient.convertToType(data['onlySendActiveLocations'], 'Boolean');
            }
            if (data.hasOwnProperty('ftpInformation')) {
                obj['ftpInformation'] = ApiClient.convertToType(data['ftpInformation'], [ExportSettingsFTP]);
            }
            if (data.hasOwnProperty('s3Information')) {
                obj['s3Information'] = ApiClient.convertToType(data['s3Information'], [ExportSettingsS3]);
            }
            if (data.hasOwnProperty('exportSingleFile')) {
                obj['exportSingleFile'] = ApiClient.convertToType(data['exportSingleFile'], 'Boolean');
            }
            if (data.hasOwnProperty('safetyStock')) {
                obj['safetyStock'] = ApiClient.convertToType(data['safetyStock'], 'String');
            }
            if (data.hasOwnProperty('floor')) {
                obj['floor'] = ApiClient.convertToType(data['floor'], 'String');
            }
            if (data.hasOwnProperty('ltd')) {
                obj['ltd'] = ApiClient.convertToType(data['ltd'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('includeAttributes')) {
                obj['includeAttributes'] = ApiClient.convertToType(data['includeAttributes'], 'Boolean');
            }
            if (data.hasOwnProperty('zipFiles')) {
                obj['zipFiles'] = ApiClient.convertToType(data['zipFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('zipFileName')) {
                obj['zipFileName'] = ApiClient.convertToType(data['zipFileName'], 'String');
            }
            if (data.hasOwnProperty('untransformedFileName')) {
                obj['untransformedFileName'] = ApiClient.convertToType(data['untransformedFileName'], 'String');
            }
            if (data.hasOwnProperty('untransformedZipFileName')) {
                obj['untransformedZipFileName'] = ApiClient.convertToType(data['untransformedZipFileName'], 'String');
            }
            if (data.hasOwnProperty('locationGroupIDs')) {
                obj['locationGroupIDs'] = ApiClient.convertToType(data['locationGroupIDs'], ['Number']);
            }
            if (data.hasOwnProperty('siteIDs')) {
                obj['siteIDs'] = ApiClient.convertToType(data['siteIDs'], ['Number']);
            }
            if (data.hasOwnProperty('directShip')) {
                obj['directShip'] = ApiClient.convertToType(data['directShip'], 'Boolean');
            }
            if (data.hasOwnProperty('pickup')) {
                obj['pickup'] = ApiClient.convertToType(data['pickup'], 'Boolean');
            }
            if (data.hasOwnProperty('transfer')) {
                obj['transfer'] = ApiClient.convertToType(data['transfer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Export Settings Name
 * @member {String} name
 */
ExportSettings.prototype['name'] = undefined;

/**
 * Format for the export file
 * @member {module:model/ExportSettings.FileFormatEnum} fileFormat
 */
ExportSettings.prototype['fileFormat'] = undefined;

/**
 * Type of exportGG for the settings
 * @member {module:model/ExportSettings.ExportTypeEnum} exportType
 */
ExportSettings.prototype['exportType'] = undefined;

/**
 * Flag for only sending available
 * @member {Boolean} onlySendAvailable
 */
ExportSettings.prototype['onlySendAvailable'] = undefined;

/**
 * Flag for only sending from active locations
 * @member {Boolean} onlySendActiveLocations
 */
ExportSettings.prototype['onlySendActiveLocations'] = undefined;

/**
 * List of export FTP settings
 * @member {Array.<module:model/ExportSettingsFTP>} ftpInformation
 */
ExportSettings.prototype['ftpInformation'] = undefined;

/**
 * List of export S3 settings
 * @member {Array.<module:model/ExportSettingsS3>} s3Information
 */
ExportSettings.prototype['s3Information'] = undefined;

/**
 * Flag for exporting as a single file
 * @member {Boolean} exportSingleFile
 */
ExportSettings.prototype['exportSingleFile'] = undefined;

/**
 * Safety Stock
 * @member {module:model/ExportSettings.SafetyStockEnum} safetyStock
 */
ExportSettings.prototype['safetyStock'] = undefined;

/**
 * Floor
 * @member {module:model/ExportSettings.FloorEnum} floor
 */
ExportSettings.prototype['floor'] = undefined;

/**
 * LTD
 * @member {module:model/ExportSettings.LtdEnum} ltd
 */
ExportSettings.prototype['ltd'] = undefined;

/**
 * Name for the export file
 * @member {String} fileName
 */
ExportSettings.prototype['fileName'] = undefined;

/**
 * Flag for including attributes
 * @member {Boolean} includeAttributes
 */
ExportSettings.prototype['includeAttributes'] = undefined;

/**
 * Flag for zipping the files
 * @member {Boolean} zipFiles
 */
ExportSettings.prototype['zipFiles'] = undefined;

/**
 * Name for the zipped file
 * @member {String} zipFileName
 */
ExportSettings.prototype['zipFileName'] = undefined;

/**
 * Untransformed File Name
 * @member {String} untransformedFileName
 */
ExportSettings.prototype['untransformedFileName'] = undefined;

/**
 * Untransformed Zip File Name
 * @member {String} untransformedZipFileName
 */
ExportSettings.prototype['untransformedZipFileName'] = undefined;

/**
 * Location Group Ids associated with the settings
 * @member {Array.<Number>} locationGroupIDs
 */
ExportSettings.prototype['locationGroupIDs'] = undefined;

/**
 * Site Ids associated with the settings
 * @member {Array.<Number>} siteIDs
 */
ExportSettings.prototype['siteIDs'] = undefined;

/**
 * Flag for only using locations with Direct Ship enabled
 * @member {Boolean} directShip
 */
ExportSettings.prototype['directShip'] = undefined;

/**
 * Flag for only using locations with In Store Pickup enabled
 * @member {Boolean} pickup
 */
ExportSettings.prototype['pickup'] = undefined;

/**
 * Flag for only using locations with Transfer enabled
 * @member {Boolean} transfer
 */
ExportSettings.prototype['transfer'] = undefined;





/**
 * Allowed values for the <code>fileFormat</code> property.
 * @enum {String}
 * @readonly
 */
ExportSettings['FileFormatEnum'] = {

    /**
     * value: "XML"
     * @const
     */
    "XML": "XML",

    /**
     * value: "CSV"
     * @const
     */
    "CSV": "CSV"
};


/**
 * Allowed values for the <code>exportType</code> property.
 * @enum {String}
 * @readonly
 */
ExportSettings['ExportTypeEnum'] = {

    /**
     * value: "AGGREGATE"
     * @const
     */
    "AGGREGATE": "AGGREGATE",

    /**
     * value: "LOCATION"
     * @const
     */
    "LOCATION": "LOCATION"
};


/**
 * Allowed values for the <code>safetyStock</code> property.
 * @enum {String}
 * @readonly
 */
ExportSettings['SafetyStockEnum'] = {

    /**
     * value: "SAFETY_STOCK_MAX"
     * @const
     */
    "MAX": "SAFETY_STOCK_MAX",

    /**
     * value: "SAFETY_STOCK_MIN"
     * @const
     */
    "MIN": "SAFETY_STOCK_MIN",

    /**
     * value: "SAFETY_STOCK_AVG"
     * @const
     */
    "AVG": "SAFETY_STOCK_AVG",

    /**
     * value: "SAFETY_STOCK_SUM"
     * @const
     */
    "SUM": "SAFETY_STOCK_SUM"
};


/**
 * Allowed values for the <code>floor</code> property.
 * @enum {String}
 * @readonly
 */
ExportSettings['FloorEnum'] = {

    /**
     * value: "FLOOR_MAX"
     * @const
     */
    "MAX": "FLOOR_MAX",

    /**
     * value: "FLOOR_MIN"
     * @const
     */
    "MIN": "FLOOR_MIN",

    /**
     * value: "FLOOR_AVG"
     * @const
     */
    "AVG": "FLOOR_AVG",

    /**
     * value: "FLOOR_SUM"
     * @const
     */
    "SUM": "FLOOR_SUM"
};


/**
 * Allowed values for the <code>ltd</code> property.
 * @enum {String}
 * @readonly
 */
ExportSettings['LtdEnum'] = {

    /**
     * value: "LTD_MAX"
     * @const
     */
    "MAX": "LTD_MAX",

    /**
     * value: "LTD_MIN"
     * @const
     */
    "MIN": "LTD_MIN",

    /**
     * value: "LTD_AVG"
     * @const
     */
    "AVG": "LTD_AVG",

    /**
     * value: "LTD_SUM"
     * @const
     */
    "SUM": "LTD_SUM"
};



export default ExportSettings;

