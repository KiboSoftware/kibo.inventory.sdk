# Inventory.PendingItemsControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePendingItems**](PendingItemsControllerApi.md#deletePendingItems) | **DELETE** /v1/pendingItem/{pendingItemID} | 
[**getPendingItems**](PendingItemsControllerApi.md#getPendingItems) | **GET** /v1/pendingItem/ | 



## deletePendingItems

> Boolean deletePendingItems(xVolTenant, pendingItemID)



Delete Pending Items

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.PendingItemsControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let pendingItemID = 56; // Number | Pending Item ID
apiInstance.deletePendingItems(xVolTenant, pendingItemID, (error, data, response) => {
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
 **pendingItemID** | **Number**| Pending Item ID | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPendingItems

> GetPendingItemsResponse getPendingItems(xVolTenant, opts)



Get Pending Items

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.PendingItemsControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let opts = {
  'locationName': "locationName_example", // String | Location Name
  'locationID': 56, // Number | Location Identifier
  'currentPage': 56, // Number | Current display page
  'numberPerPage': 56, // Number | Number of items shown per page
  'sortBy': "sortBy_example", // String | Field to sort by (enum = {'QUANTITY', 'FROM', 'TO', 'TYPE', 'ORDER_ID', 'WEIGHT'})
  'shipmentID': 56 // Number | Shipment ID
};
apiInstance.getPendingItems(xVolTenant, opts, (error, data, response) => {
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
 **locationName** | **String**| Location Name | [optional] 
 **locationID** | **Number**| Location Identifier | [optional] 
 **currentPage** | **Number**| Current display page | [optional] 
 **numberPerPage** | **Number**| Number of items shown per page | [optional] 
 **sortBy** | **String**| Field to sort by (enum &#x3D; {&#39;QUANTITY&#39;, &#39;FROM&#39;, &#39;TO&#39;, &#39;TYPE&#39;, &#39;ORDER_ID&#39;, &#39;WEIGHT&#39;}) | [optional] 
 **shipmentID** | **Number**| Shipment ID | [optional] 

### Return type

[**GetPendingItemsResponse**](GetPendingItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

