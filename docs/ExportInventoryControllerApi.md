# Inventory.ExportInventoryControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExportSettings**](ExportInventoryControllerApi.md#createExportSettings) | **POST** /v1/export/create | 
[**createExportSettingsFTP**](ExportInventoryControllerApi.md#createExportSettingsFTP) | **POST** /v1/export/ftp/create | 
[**createExportSettingsS3**](ExportInventoryControllerApi.md#createExportSettingsS3) | **POST** /v1/export/s3/create | 
[**deleteExportSettings**](ExportInventoryControllerApi.md#deleteExportSettings) | **DELETE** /v1/export/{exportSettingsName} | 
[**deleteExportSettingsFTP**](ExportInventoryControllerApi.md#deleteExportSettingsFTP) | **DELETE** /v1/export/ftp/{exportSettingsName}/{exportSettingsFTPName} | 
[**deleteExportSettingsS3**](ExportInventoryControllerApi.md#deleteExportSettingsS3) | **DELETE** /v1/export/s3/{exportSettingsName}/{exportSettingsS3Name} | 
[**getExportSettings**](ExportInventoryControllerApi.md#getExportSettings) | **GET** /v1/export | 
[**runExport**](ExportInventoryControllerApi.md#runExport) | **POST** /v1/export/ | 
[**updateExportSettings**](ExportInventoryControllerApi.md#updateExportSettings) | **POST** /v1/export/update | 
[**updateExportSettingsFTP**](ExportInventoryControllerApi.md#updateExportSettingsFTP) | **POST** /v1/export/ftp/update | 
[**updateExportSettingsS3**](ExportInventoryControllerApi.md#updateExportSettingsS3) | **POST** /v1/export/s3/update | 



## createExportSettings

> String createExportSettings(xVolTenant, createExportSettingsRequest)



Create an Export Settings

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createExportSettingsRequest = new Inventory.CreateExportSettingsRequest(); // CreateExportSettingsRequest | Request to create a new Export Settings
apiInstance.createExportSettings(xVolTenant, createExportSettingsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **createExportSettingsRequest** | [**CreateExportSettingsRequest**](CreateExportSettingsRequest.md)| Request to create a new Export Settings | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createExportSettingsFTP

> String createExportSettingsFTP(xVolTenant, createExportSettingsFTPRequest)



Create an Export Settings FTP

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createExportSettingsFTPRequest = new Inventory.CreateExportSettingsFTPRequest(); // CreateExportSettingsFTPRequest | Request to create a new Export Settings FTP
apiInstance.createExportSettingsFTP(xVolTenant, createExportSettingsFTPRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **createExportSettingsFTPRequest** | [**CreateExportSettingsFTPRequest**](CreateExportSettingsFTPRequest.md)| Request to create a new Export Settings FTP | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createExportSettingsS3

> Number createExportSettingsS3(xVolTenant, createExportSettingsS3Request)



Create an Export Settings S3

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createExportSettingsS3Request = new Inventory.CreateExportSettingsS3Request(); // CreateExportSettingsS3Request | Request to create a new Export Settings S3
apiInstance.createExportSettingsS3(xVolTenant, createExportSettingsS3Request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **createExportSettingsS3Request** | [**CreateExportSettingsS3Request**](CreateExportSettingsS3Request.md)| Request to create a new Export Settings S3 | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteExportSettings

> Number deleteExportSettings(xVolTenant, exportSettingsName)



Deletes an Export Settings

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let exportSettingsName = "exportSettingsName_example"; // String | Export Settings Name
apiInstance.deleteExportSettings(xVolTenant, exportSettingsName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **exportSettingsName** | **String**| Export Settings Name | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteExportSettingsFTP

> Number deleteExportSettingsFTP(xVolTenant, exportSettingsName, exportSettingsFTPName)



Deletes an Export Settings FTP. Not specifying exportSettingsFTPID deletes ALL ftp settings for the specified export settings.

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let exportSettingsName = "exportSettingsName_example"; // String | Export Settings Name
let exportSettingsFTPName = "exportSettingsFTPName_example"; // String | Export Settings FTP Name
apiInstance.deleteExportSettingsFTP(xVolTenant, exportSettingsName, exportSettingsFTPName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **exportSettingsName** | **String**| Export Settings Name | 
 **exportSettingsFTPName** | **String**| Export Settings FTP Name | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteExportSettingsS3

> Boolean deleteExportSettingsS3(xVolTenant, exportSettingsName, exportSettingsS3Name)



Deletes an Export Settings S3. Not specifying exportSettingsS3ID deletes ALL s3 settings for the specified export settings.

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let exportSettingsName = "exportSettingsName_example"; // String | Export Settings Name
let exportSettingsS3Name = "exportSettingsS3Name_example"; // String | Export Settings S3 Name
apiInstance.deleteExportSettingsS3(xVolTenant, exportSettingsName, exportSettingsS3Name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **exportSettingsName** | **String**| Export Settings Name | 
 **exportSettingsS3Name** | **String**| Export Settings S3 Name | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExportSettings

> [ExportSettings] getExportSettings(xVolTenant, exportSettingsName)



Get an export settings

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let exportSettingsName = "exportSettingsName_example"; // String | Export Settings Name
apiInstance.getExportSettings(xVolTenant, exportSettingsName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **exportSettingsName** | **String**| Export Settings Name | 

### Return type

[**[ExportSettings]**](ExportSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runExport

> ExportInventoryResponse runExport(xVolTenant, exportInventoryRequest)



Run Export Settings Job

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let exportInventoryRequest = new Inventory.ExportInventoryRequest(); // ExportInventoryRequest | Request to run an inventory export
apiInstance.runExport(xVolTenant, exportInventoryRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **exportInventoryRequest** | [**ExportInventoryRequest**](ExportInventoryRequest.md)| Request to run an inventory export | 

### Return type

[**ExportInventoryResponse**](ExportInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExportSettings

> UpdateExportSettingsResponse updateExportSettings(xVolTenant, updateExportSettingsRequest)



Update an Export Settings

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let updateExportSettingsRequest = new Inventory.UpdateExportSettingsRequest(); // UpdateExportSettingsRequest | Request to update an existing Export Settings
apiInstance.updateExportSettings(xVolTenant, updateExportSettingsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **updateExportSettingsRequest** | [**UpdateExportSettingsRequest**](UpdateExportSettingsRequest.md)| Request to update an existing Export Settings | 

### Return type

[**UpdateExportSettingsResponse**](UpdateExportSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExportSettingsFTP

> UpdateExportSettingsFTPResponse updateExportSettingsFTP(xVolTenant, updateExportSettingsFTPRequest)



Update an Export Settings FTP

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let updateExportSettingsFTPRequest = new Inventory.UpdateExportSettingsFTPRequest(); // UpdateExportSettingsFTPRequest | Request to update an existing Export Settings FTP
apiInstance.updateExportSettingsFTP(xVolTenant, updateExportSettingsFTPRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **updateExportSettingsFTPRequest** | [**UpdateExportSettingsFTPRequest**](UpdateExportSettingsFTPRequest.md)| Request to update an existing Export Settings FTP | 

### Return type

[**UpdateExportSettingsFTPResponse**](UpdateExportSettingsFTPResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExportSettingsS3

> UpdateExportSettingsS3Response updateExportSettingsS3(xVolTenant, updateExportSettingsS3Request)



Update an Export Settings S3

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ExportInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let updateExportSettingsS3Request = new Inventory.UpdateExportSettingsS3Request(); // UpdateExportSettingsS3Request | Request to update an existing Export Settings S3
apiInstance.updateExportSettingsS3(xVolTenant, updateExportSettingsS3Request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**| Tenant ID | 
 **updateExportSettingsS3Request** | [**UpdateExportSettingsS3Request**](UpdateExportSettingsS3Request.md)| Request to update an existing Export Settings S3 | 

### Return type

[**UpdateExportSettingsS3Response**](UpdateExportSettingsS3Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

