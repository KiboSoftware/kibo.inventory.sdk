# Inventory.ModifyInventoryControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjust**](ModifyInventoryControllerApi.md#adjust) | **POST** /v5/inventory/adjust/ | 
[**callDelete**](ModifyInventoryControllerApi.md#callDelete) | **POST** /v5/inventory/delete/ | 
[**refresh**](ModifyInventoryControllerApi.md#refresh) | **POST** /v5/inventory/refresh/ | 
[**syncAdjust**](ModifyInventoryControllerApi.md#syncAdjust) | **POST** /v5/inventory/sync-adjust/ | 
[**syncRefresh**](ModifyInventoryControllerApi.md#syncRefresh) | **POST** /v5/inventory/sync-refresh/ | 



## adjust

> JobIDResponse adjust(xVolTenant, adjustRequest)



Adjust Inventory

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ModifyInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let adjustRequest = new Inventory.AdjustRequest(); // AdjustRequest | Request to adjust inventory
apiInstance.adjust(xVolTenant, adjustRequest, (error, data, response) => {
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
 **adjustRequest** | [**AdjustRequest**](AdjustRequest.md)| Request to adjust inventory | 

### Return type

[**JobIDResponse**](JobIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## callDelete

> DeleteItemResponse callDelete(xVolTenant, deleteItemRequest, opts)



Delete Inventory

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ModifyInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let deleteItemRequest = new Inventory.DeleteItemRequest(); // DeleteItemRequest | Request to delete item(s)
let opts = {
  'xVolSite': 56 // Number | Site ID
};
apiInstance.callDelete(xVolTenant, deleteItemRequest, opts, (error, data, response) => {
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
 **deleteItemRequest** | [**DeleteItemRequest**](DeleteItemRequest.md)| Request to delete item(s) | 
 **xVolSite** | **Number**| Site ID | [optional] 

### Return type

[**DeleteItemResponse**](DeleteItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refresh

> JobIDResponse refresh(xVolTenant, refreshRequest)



Refresh Inventory

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ModifyInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let refreshRequest = new Inventory.RefreshRequest(); // RefreshRequest | Request to refresh inventory
apiInstance.refresh(xVolTenant, refreshRequest, (error, data, response) => {
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
 **refreshRequest** | [**RefreshRequest**](RefreshRequest.md)| Request to refresh inventory | 

### Return type

[**JobIDResponse**](JobIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncAdjust

> [InventoryResponse] syncAdjust(xVolTenant, adjustRequest)



Adjust Inventory - synchronous

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ModifyInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let adjustRequest = new Inventory.AdjustRequest(); // AdjustRequest | Request to adjust inventory
apiInstance.syncAdjust(xVolTenant, adjustRequest, (error, data, response) => {
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
 **adjustRequest** | [**AdjustRequest**](AdjustRequest.md)| Request to adjust inventory | 

### Return type

[**[InventoryResponse]**](InventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncRefresh

> [InventoryResponse] syncRefresh(xVolTenant, refreshRequest)



Refresh Inventory - synchronous

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ModifyInventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let refreshRequest = new Inventory.RefreshRequest(); // RefreshRequest | Request to refresh inventory
apiInstance.syncRefresh(xVolTenant, refreshRequest, (error, data, response) => {
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
 **refreshRequest** | [**RefreshRequest**](RefreshRequest.md)| Request to refresh inventory | 

### Return type

[**[InventoryResponse]**](InventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

