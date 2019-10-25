# Inventory.OrderItemControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderItemInformation**](OrderItemControllerApi.md#getOrderItemInformation) | **POST** /v5/inventory/getOrderItemInformation/ | 
[**getOrderItemLog**](OrderItemControllerApi.md#getOrderItemLog) | **POST** /v5/inventory/getOrderItemLog/ | 



## getOrderItemInformation

> [OrderItemInformation] getOrderItemInformation(xVolTenant, orderItemInformationRequest)



Get Order Item Information

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.OrderItemControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let orderItemInformationRequest = new Inventory.OrderItemInformationRequest(); // OrderItemInformationRequest | Request to retrieve order item information
apiInstance.getOrderItemInformation(xVolTenant, orderItemInformationRequest, (error, data, response) => {
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
 **orderItemInformationRequest** | [**OrderItemInformationRequest**](OrderItemInformationRequest.md)| Request to retrieve order item information | 

### Return type

[**[OrderItemInformation]**](OrderItemInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrderItemLog

> [OrderItemLogResponse] getOrderItemLog(xVolTenant, orderItemLogRequest)



Get Order Item Log

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.OrderItemControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let orderItemLogRequest = new Inventory.OrderItemLogRequest(); // OrderItemLogRequest | Request to retrieve order item log(s)
apiInstance.getOrderItemLog(xVolTenant, orderItemLogRequest, (error, data, response) => {
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
 **orderItemLogRequest** | [**OrderItemLogRequest**](OrderItemLogRequest.md)| Request to retrieve order item log(s) | 

### Return type

[**[OrderItemLogResponse]**](OrderItemLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

