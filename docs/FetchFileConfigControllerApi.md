# Inventory.FetchFileConfigControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFetchConfig**](FetchFileConfigControllerApi.md#getFetchConfig) | **GET** /v1/config/fetchfile/ | 
[**saveFetchConfig**](FetchFileConfigControllerApi.md#saveFetchConfig) | **POST** /v1/config/fetchfile/ | 



## getFetchConfig

> MFetchFileConfig getFetchConfig(xVolTenant)



Get the Fetch File Configs for the current tenant

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.FetchFileConfigControllerApi();
let xVolTenant = 56; // Number | Tenant ID
apiInstance.getFetchConfig(xVolTenant, (error, data, response) => {
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

### Return type

[**MFetchFileConfig**](MFetchFileConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveFetchConfig

> Boolean saveFetchConfig(xVolTenant, fetchFileConfigRequest)



Save a new Fetch File Config

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.FetchFileConfigControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let fetchFileConfigRequest = new Inventory.FetchFileConfigRequest(); // FetchFileConfigRequest | Request to fetch file configs
apiInstance.saveFetchConfig(xVolTenant, fetchFileConfigRequest, (error, data, response) => {
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
 **fetchFileConfigRequest** | [**FetchFileConfigRequest**](FetchFileConfigRequest.md)| Request to fetch file configs | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

