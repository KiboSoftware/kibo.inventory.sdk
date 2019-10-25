# Inventory.InventoryControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregate**](InventoryControllerApi.md#aggregate) | **POST** /v5/inventory/aggregate/ | 
[**getInventory**](InventoryControllerApi.md#getInventory) | **GET** /v5/inventory/ | 
[**postQueryInventory**](InventoryControllerApi.md#postQueryInventory) | **POST** /v5/inventory/ | 



## aggregate

> [AggregateResponse] aggregate(xVolTenant, aggregateRequest, opts)



Aggregates Inventory

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.InventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let aggregateRequest = new Inventory.AggregateRequest(); // AggregateRequest | Request to aggregate inventory
let opts = {
  'xVolSite': 56 // Number | Site ID
};
apiInstance.aggregate(xVolTenant, aggregateRequest, opts, (error, data, response) => {
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
 **aggregateRequest** | [**AggregateRequest**](AggregateRequest.md)| Request to aggregate inventory | 
 **xVolSite** | **Number**| Site ID | [optional] 

### Return type

[**[AggregateResponse]**](AggregateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getInventory

> [InventoryResponse] getInventory(xVolTenant, type, opts)



Get inventory from specified location

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.InventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let type = "type_example"; // String | Type of request enum
let opts = {
  'xVolSite': 56, // Number | Site ID
  'items': [new Inventory.ItemQuantity()], // [ItemQuantity] | List of Items to search on
  'requestLocation': new Inventory.RequestLocation(), // RequestLocation | Location for Request
  'locationWhitelist': ["null"], // [String] | List of location codes that are allowed to be included in results
  'locationBlacklist': ["null"], // [String] | List of location codes that are NOT allowed to be included in results
  'limit': 56, // Number | The maximum number of results to return, defaults to 100 for most
  'ignoreSafetyStock': true, // Boolean | Whether to ignore the safety stock buffer put in place
  'includeNegativeInventory': true, // Boolean | Whether to allow items with negative inventory in the results
  'shippingLocation': true, // Boolean | Whether to limit results to locations that are shipping enabled
  'transferEnabled': true, // Boolean | Filter results by locations that have transfer enabled (true) or don't (false)
  'pickup': true, // Boolean | Filter results by locations that are pickup-enabled (true) or not (false)
  'includeInAggregate': true, // Boolean | Filter results by locations that have aggregate export enabled (true) or don't (false)
  'includeAttributes': true // Boolean | Flag to include attributes or not
};
apiInstance.getInventory(xVolTenant, type, opts, (error, data, response) => {
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
 **type** | **String**| Type of request enum | 
 **xVolSite** | **Number**| Site ID | [optional] 
 **items** | [**[ItemQuantity]**](ItemQuantity.md)| List of Items to search on | [optional] 
 **requestLocation** | [**RequestLocation**](.md)| Location for Request | [optional] 
 **locationWhitelist** | [**[String]**](String.md)| List of location codes that are allowed to be included in results | [optional] 
 **locationBlacklist** | [**[String]**](String.md)| List of location codes that are NOT allowed to be included in results | [optional] 
 **limit** | **Number**| The maximum number of results to return, defaults to 100 for most | [optional] 
 **ignoreSafetyStock** | **Boolean**| Whether to ignore the safety stock buffer put in place | [optional] 
 **includeNegativeInventory** | **Boolean**| Whether to allow items with negative inventory in the results | [optional] 
 **shippingLocation** | **Boolean**| Whether to limit results to locations that are shipping enabled | [optional] 
 **transferEnabled** | **Boolean**| Filter results by locations that have transfer enabled (true) or don&#39;t (false) | [optional] 
 **pickup** | **Boolean**| Filter results by locations that are pickup-enabled (true) or not (false) | [optional] 
 **includeInAggregate** | **Boolean**| Filter results by locations that have aggregate export enabled (true) or don&#39;t (false) | [optional] 
 **includeAttributes** | **Boolean**| Flag to include attributes or not | [optional] 

### Return type

[**[InventoryResponse]**](InventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postQueryInventory

> [InventoryResponse] postQueryInventory(xVolTenant, inventoryRequest, opts)



Queries for specified inventory at given location

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.InventoryControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let inventoryRequest = new Inventory.InventoryRequest(); // InventoryRequest | Request to get inventory
let opts = {
  'xVolSite': 56 // Number | Site ID
};
apiInstance.postQueryInventory(xVolTenant, inventoryRequest, opts, (error, data, response) => {
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
 **inventoryRequest** | [**InventoryRequest**](InventoryRequest.md)| Request to get inventory | 
 **xVolSite** | **Number**| Site ID | [optional] 

### Return type

[**[InventoryResponse]**](InventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

