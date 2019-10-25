# Inventory.AuditControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelAudit**](AuditControllerApi.md#cancelAudit) | **POST** /v1/audit/{audit_id}/cancel/ | 
[**completeAudit**](AuditControllerApi.md#completeAudit) | **POST** /v1/audit/{audit_id}/complete/ | 
[**createAudit**](AuditControllerApi.md#createAudit) | **POST** /v1/audit/ | 
[**getAuditDetails**](AuditControllerApi.md#getAuditDetails) | **GET** /v1/audit/{audit_id}/ | 
[**getOpenAudits**](AuditControllerApi.md#getOpenAudits) | **GET** /v1/audit/allOpen/{location_code}/ | 
[**searchAudits**](AuditControllerApi.md#searchAudits) | **POST** /v1/audit/search/ | 



## cancelAudit

> BaseResponse cancelAudit(xVolTenant, auditId)



Cancel an audit

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let auditId = 789; // Number | Id of audit
apiInstance.cancelAudit(xVolTenant, auditId, (error, data, response) => {
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
 **auditId** | **Number**| Id of audit | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## completeAudit

> Audit completeAudit(xVolTenant, auditId, loadBinInventoryRequest)



Complete an audit

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let auditId = 789; // Number | Id of audit
let loadBinInventoryRequest = new Inventory.LoadBinInventoryRequest(); // LoadBinInventoryRequest | Request to load bin inventory
apiInstance.completeAudit(xVolTenant, auditId, loadBinInventoryRequest, (error, data, response) => {
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
 **auditId** | **Number**| Id of audit | 
 **loadBinInventoryRequest** | [**LoadBinInventoryRequest**](LoadBinInventoryRequest.md)| Request to load bin inventory | 

### Return type

[**Audit**](Audit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAudit

> Audit createAudit(xVolTenant, createAuditRequest)



Create a new audit

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createAuditRequest = new Inventory.CreateAuditRequest(); // CreateAuditRequest | Request to create an audit
apiInstance.createAudit(xVolTenant, createAuditRequest, (error, data, response) => {
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
 **createAuditRequest** | [**CreateAuditRequest**](CreateAuditRequest.md)| Request to create an audit | 

### Return type

[**Audit**](Audit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAuditDetails

> Audit getAuditDetails(xVolTenant, auditId)



Get details of the specified audit

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let auditId = 789; // Number | Id of audit
apiInstance.getAuditDetails(xVolTenant, auditId, (error, data, response) => {
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
 **auditId** | **Number**| Id of audit | 

### Return type

[**Audit**](Audit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpenAudits

> [Audit] getOpenAudits(xVolTenant, locationId)



Get all of the open   audits at the given location

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let locationId = 789; // Number | Id of location
apiInstance.getOpenAudits(xVolTenant, locationId, (error, data, response) => {
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
 **locationId** | **Number**| Id of location | 

### Return type

[**[Audit]**](Audit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAudits

> AuditSearchResponse searchAudits(xVolTenant, auditSearchRequest)



Search for a list of Audits

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.AuditControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let auditSearchRequest = new Inventory.AuditSearchRequest(); // AuditSearchRequest | Request to search audits
apiInstance.searchAudits(xVolTenant, auditSearchRequest, (error, data, response) => {
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
 **auditSearchRequest** | [**AuditSearchRequest**](AuditSearchRequest.md)| Request to search audits | 

### Return type

[**AuditSearchResponse**](AuditSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

