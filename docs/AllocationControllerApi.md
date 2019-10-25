# Inventory.AllocationControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocateInventory**](AllocationControllerApi.md#allocateInventory) | **POST** /v5/inventory/allocate/ | 
[**deallocateInventory**](AllocationControllerApi.md#deallocateInventory) | **POST** /v5/inventory/deallocate/ | 
[**fulfillInventory**](AllocationControllerApi.md#fulfillInventory) | **POST** /v5/inventory/fulfill/ | 



## allocateInventory

> JobQueueResponse allocateInventory(xVolTenant, allocateInventoryRequest)



Allocates inventory based on the given request

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AllocationControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let allocateInventoryRequest = new Inventory.AllocateInventoryRequest(); // AllocateInventoryRequest | Request to allocate inventory
apiInstance.allocateInventory(xVolTenant, allocateInventoryRequest, (error, data, response) => {
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
 **allocateInventoryRequest** | [**AllocateInventoryRequest**](AllocateInventoryRequest.md)| Request to allocate inventory | 

### Return type

[**JobQueueResponse**](JobQueueResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deallocateInventory

> BaseResponse deallocateInventory(xVolTenant, allocateInventoryRequest)



Deallocates inventory based on the given request

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AllocationControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let allocateInventoryRequest = new Inventory.AllocateInventoryRequest(); // AllocateInventoryRequest | Request to allocate inventory
apiInstance.deallocateInventory(xVolTenant, allocateInventoryRequest, (error, data, response) => {
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
 **allocateInventoryRequest** | [**AllocateInventoryRequest**](AllocateInventoryRequest.md)| Request to allocate inventory | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fulfillInventory

> BaseResponse fulfillInventory(xVolTenant, allocateInventoryRequest)



Fulfills inventory based on the given request

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AllocationControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let allocateInventoryRequest = new Inventory.AllocateInventoryRequest(); // AllocateInventoryRequest | Request to allocate inventory
apiInstance.fulfillInventory(xVolTenant, allocateInventoryRequest, (error, data, response) => {
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
 **allocateInventoryRequest** | [**AllocateInventoryRequest**](AllocateInventoryRequest.md)| Request to allocate inventory | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

