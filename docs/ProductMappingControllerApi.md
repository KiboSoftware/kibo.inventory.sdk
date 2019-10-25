# Inventory.ProductMappingControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductMapping**](ProductMappingControllerApi.md#createProductMapping) | **POST** /v1/productMapping | 
[**deleteProductMapping**](ProductMappingControllerApi.md#deleteProductMapping) | **DELETE** /v1/productMapping/{direction} | 
[**getProductMapping**](ProductMappingControllerApi.md#getProductMapping) | **GET** /v1/productMapping | 



## createProductMapping

> ProductMapping createProductMapping(xVolTenant, productMappingRequest)



Creates a Product Mapping

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ProductMappingControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let productMappingRequest = new Inventory.ProductMappingRequest(); // ProductMappingRequest | Request to work with Product Mappings
apiInstance.createProductMapping(xVolTenant, productMappingRequest, (error, data, response) => {
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
 **productMappingRequest** | [**ProductMappingRequest**](ProductMappingRequest.md)| Request to work with Product Mappings | 

### Return type

[**ProductMapping**](ProductMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProductMapping

> Boolean deleteProductMapping(xVolTenant, direction, productMappingRequest)



Delete a Product Mapping

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ProductMappingControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let direction = "direction_example"; // String | Direction
let productMappingRequest = new Inventory.ProductMappingRequest(); // ProductMappingRequest | Request to work with Product Mappings
apiInstance.deleteProductMapping(xVolTenant, direction, productMappingRequest, (error, data, response) => {
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
 **direction** | **String**| Direction | 
 **productMappingRequest** | [**ProductMappingRequest**](ProductMappingRequest.md)| Request to work with Product Mappings | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProductMapping

> ProductMappingResponse getProductMapping(xVolTenant)



Gets a list Product Mappings for the specified tenant

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.ProductMappingControllerApi();
let xVolTenant = 56; // Number | Tenant ID
apiInstance.getProductMapping(xVolTenant, (error, data, response) => {
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

[**ProductMappingResponse**](ProductMappingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

