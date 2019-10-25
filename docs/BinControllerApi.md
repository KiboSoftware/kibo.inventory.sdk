# Inventory.BinControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBin**](BinControllerApi.md#createBin) | **POST** /v1/bin/ | 
[**deleteBin**](BinControllerApi.md#deleteBin) | **DELETE** /v1/bin/{bin_id} | 
[**getBin**](BinControllerApi.md#getBin) | **GET** /v1/bin/{bin_id} | 
[**getBinStatuses**](BinControllerApi.md#getBinStatuses) | **GET** /v1/bin/binStatuses/ | 
[**getBinTypes**](BinControllerApi.md#getBinTypes) | **GET** /v1/bin/binTypes/ | 
[**getBins**](BinControllerApi.md#getBins) | **GET** /v1/bin/ | 
[**loadInventory**](BinControllerApi.md#loadInventory) | **POST** /v1/bin/loadInventory/ | 
[**searchBins**](BinControllerApi.md#searchBins) | **POST** /v1/bin/searchInventory/ | 
[**updateBin**](BinControllerApi.md#updateBin) | **POST** /v1/bin/{bin_id}/ | 
[**updateBins**](BinControllerApi.md#updateBins) | **POST** /v1/bin/updateBins/ | 



## createBin

> Number createBin(xVolTenant, createBinRequest)



Create a bin

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createBinRequest = new Inventory.CreateBinRequest(); // CreateBinRequest | Request to create a new bin
apiInstance.createBin(xVolTenant, createBinRequest, (error, data, response) => {
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
 **createBinRequest** | [**CreateBinRequest**](CreateBinRequest.md)| Request to create a new bin | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBin

> BaseResponse deleteBin(xVolTenant, binId, binName, locationCode)



Delete a bin

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let binId = 789; // Number | Id of bin to get
let binName = 56; // Number | Bin Name
let locationCode = "locationCode_example"; // String | Location Code
apiInstance.deleteBin(xVolTenant, binId, binName, locationCode, (error, data, response) => {
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
 **binId** | **Number**| Id of bin to get | 
 **binName** | **Number**| Bin Name | 
 **locationCode** | **String**| Location Code | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBin

> Bin getBin(xVolTenant, binId)



Get a bin

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let binId = 789; // Number | Id of bin to get
apiInstance.getBin(xVolTenant, binId, (error, data, response) => {
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
 **binId** | **Number**| Id of bin to get | 

### Return type

[**Bin**](Bin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBinStatuses

> [BinStatusModel] getBinStatuses(xVolTenant)



Get list of bin statuses

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
apiInstance.getBinStatuses(xVolTenant, (error, data, response) => {
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

[**[BinStatusModel]**](BinStatusModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBinTypes

> [BinTypeModel] getBinTypes(xVolTenant)



Get list of bin types

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
apiInstance.getBinTypes(xVolTenant, (error, data, response) => {
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

[**[BinTypeModel]**](BinTypeModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBins

> BinResponseModel getBins(xVolTenant, locationID, searchTerm, opts)



Get a list of bins

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let locationID = 789; // Number | Id of location
let searchTerm = 789; // Number | Term to match in bins
let opts = {
  'perPage': 789, // Number | Results per page
  'page': 789 // Number | Page to show
};
apiInstance.getBins(xVolTenant, locationID, searchTerm, opts, (error, data, response) => {
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
 **locationID** | **Number**| Id of location | 
 **searchTerm** | **Number**| Term to match in bins | 
 **perPage** | **Number**| Results per page | [optional] 
 **page** | **Number**| Page to show | [optional] 

### Return type

[**BinResponseModel**](BinResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadInventory

> LoadBinInventoryResponse loadInventory(xVolTenant, loadBinInventoryRequest)



Loads bin inventory for designated bins

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let loadBinInventoryRequest = new Inventory.LoadBinInventoryRequest(); // LoadBinInventoryRequest | Request to load bin inventory
apiInstance.loadInventory(xVolTenant, loadBinInventoryRequest, (error, data, response) => {
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
 **loadBinInventoryRequest** | [**LoadBinInventoryRequest**](LoadBinInventoryRequest.md)| Request to load bin inventory | 

### Return type

[**LoadBinInventoryResponse**](LoadBinInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchBins

> BinSearchResponse searchBins(xVolTenant, binSearchRequest)



Search bins for a inventory by bin name or any product identifier

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let binSearchRequest = new Inventory.BinSearchRequest(); // BinSearchRequest | Request to allocate inventory
apiInstance.searchBins(xVolTenant, binSearchRequest, (error, data, response) => {
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
 **binSearchRequest** | [**BinSearchRequest**](BinSearchRequest.md)| Request to allocate inventory | 

### Return type

[**BinSearchResponse**](BinSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBin

> Bin updateBin(xVolTenant, binId, updateBinRequest)



Update the designated bin

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let binId = 789; // Number | Id of bin to update
let updateBinRequest = new Inventory.UpdateBinRequest(); // UpdateBinRequest | Request to update a bin
apiInstance.updateBin(xVolTenant, binId, updateBinRequest, (error, data, response) => {
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
 **binId** | **Number**| Id of bin to update | 
 **updateBinRequest** | [**UpdateBinRequest**](UpdateBinRequest.md)| Request to update a bin | 

### Return type

[**Bin**](Bin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBins

> UpdateBinsResponse updateBins(xVolTenant, updateBinsRequest)



Update the designated bins

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.BinControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let updateBinsRequest = new Inventory.UpdateBinsRequest(); // UpdateBinsRequest | Request to update multiple bins
apiInstance.updateBins(xVolTenant, updateBinsRequest, (error, data, response) => {
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
 **updateBinsRequest** | [**UpdateBinsRequest**](UpdateBinsRequest.md)| Request to update multiple bins | 

### Return type

[**UpdateBinsResponse**](UpdateBinsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

