# Inventory.JobControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJob**](JobControllerApi.md#getJob) | **GET** /v1/queue/{jobID}/ | 
[**getJobs**](JobControllerApi.md#getJobs) | **GET** /v1/queue/ | 



## getJob

> JobQueueResponse getJob(xVolTenant, jobID)



Get the specified job

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.JobControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let jobID = 789; // Number | Id of bin to get
apiInstance.getJob(xVolTenant, jobID, (error, data, response) => {
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
 **jobID** | **Number**| Id of bin to get | 

### Return type

[**JobQueueResponse**](JobQueueResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJobs

> [JobQueueResponse] getJobs(xVolTenant, opts)



Get the requested jobs

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.JobControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let opts = {
  'locationCode': "locationCode_example", // String | Tenant specified unique Identifier of the owning location
  'limit': 56, // Number | The maximum number of results to return, defaults to 100 for most
  'owner': "owner_example", // String | User that owns the job
  'types': ["null"], // [String] | Type of the Job Queue Request
  'originalFilename': "originalFilename_example" // String | The full name of the file that was picked up at the secure droppoint server before being split up by location.
};
apiInstance.getJobs(xVolTenant, opts, (error, data, response) => {
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
 **locationCode** | **String**| Tenant specified unique Identifier of the owning location | [optional] 
 **limit** | **Number**| The maximum number of results to return, defaults to 100 for most | [optional] 
 **owner** | **String**| User that owns the job | [optional] 
 **types** | [**[String]**](String.md)| Type of the Job Queue Request | [optional] 
 **originalFilename** | **String**| The full name of the file that was picked up at the secure droppoint server before being split up by location. | [optional] 

### Return type

[**[JobQueueResponse]**](JobQueueResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

