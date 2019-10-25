# Inventory.ExportSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Export Settings Name | 
**fileFormat** | **String** | Format for the export file | 
**exportType** | **String** | Type of exportGG for the settings | 
**onlySendAvailable** | **Boolean** | Flag for only sending available | [optional] 
**onlySendActiveLocations** | **Boolean** | Flag for only sending from active locations | [optional] 
**ftpInformation** | [**[ExportSettingsFTP]**](ExportSettingsFTP.md) | List of export FTP settings | 
**s3Information** | [**[ExportSettingsS3]**](ExportSettingsS3.md) | List of export S3 settings | [optional] 
**exportSingleFile** | **Boolean** | Flag for exporting as a single file | [optional] 
**safetyStock** | **String** | Safety Stock | [optional] 
**floor** | **String** | Floor | [optional] 
**ltd** | **String** | LTD | [optional] 
**fileName** | **String** | Name for the export file | [optional] 
**includeAttributes** | **Boolean** | Flag for including attributes | [optional] 
**zipFiles** | **Boolean** | Flag for zipping the files | [optional] 
**zipFileName** | **String** | Name for the zipped file | [optional] 
**untransformedFileName** | **String** | Untransformed File Name | [optional] 
**untransformedZipFileName** | **String** | Untransformed Zip File Name | [optional] 
**locationGroupIDs** | **[Number]** | Location Group Ids associated with the settings | [optional] 
**siteIDs** | **[Number]** | Site Ids associated with the settings | [optional] 
**directShip** | **Boolean** | Flag for only using locations with Direct Ship enabled | [optional] 
**pickup** | **Boolean** | Flag for only using locations with In Store Pickup enabled | [optional] 
**transfer** | **Boolean** | Flag for only using locations with Transfer enabled | [optional] 



## Enum: FileFormatEnum


* `XML` (value: `"XML"`)

* `CSV` (value: `"CSV"`)





## Enum: ExportTypeEnum


* `AGGREGATE` (value: `"AGGREGATE"`)

* `LOCATION` (value: `"LOCATION"`)





## Enum: SafetyStockEnum


* `MAX` (value: `"SAFETY_STOCK_MAX"`)

* `MIN` (value: `"SAFETY_STOCK_MIN"`)

* `AVG` (value: `"SAFETY_STOCK_AVG"`)

* `SUM` (value: `"SAFETY_STOCK_SUM"`)





## Enum: FloorEnum


* `MAX` (value: `"FLOOR_MAX"`)

* `MIN` (value: `"FLOOR_MIN"`)

* `AVG` (value: `"FLOOR_AVG"`)

* `SUM` (value: `"FLOOR_SUM"`)





## Enum: LtdEnum


* `MAX` (value: `"LTD_MAX"`)

* `MIN` (value: `"LTD_MIN"`)

* `AVG` (value: `"LTD_AVG"`)

* `SUM` (value: `"LTD_SUM"`)




