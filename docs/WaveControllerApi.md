# Inventory.WaveControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closePickWave**](WaveControllerApi.md#closePickWave) | **POST** /v1/wave/{wave_id}/close/ | 
[**createPickWave**](WaveControllerApi.md#createPickWave) | **POST** /v1/wave/ | 
[**getOpenPickWaves**](WaveControllerApi.md#getOpenPickWaves) | **GET** /v1/wave/open/{location_id}/ | 
[**getWaveDetails**](WaveControllerApi.md#getWaveDetails) | **GET** /v1/wave/{wave_id}/ | 
[**queryWaveSuggestion**](WaveControllerApi.md#queryWaveSuggestion) | **POST** /v1/wave/suggestion/ | 



## closePickWave

> CreateWaveResponse closePickWave(xVolTenant, waveId, waveCompletion)



Close Pick Wave (Complete)

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.WaveControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let waveId = 56; // Number | Wave Identifier
let waveCompletion = new Inventory.WaveCompletion(); // WaveCompletion | Request to complete a wave
apiInstance.closePickWave(xVolTenant, waveId, waveCompletion, (error, data, response) => {
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
 **waveId** | **Number**| Wave Identifier | 
 **waveCompletion** | [**WaveCompletion**](WaveCompletion.md)| Request to complete a wave | 

### Return type

[**CreateWaveResponse**](CreateWaveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPickWave

> CreateWaveResponse createPickWave(xVolTenant, createWaveRequest)



Create Pick Wave

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.WaveControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let createWaveRequest = new Inventory.CreateWaveRequest(); // CreateWaveRequest | Request to create a new pick wave(s)
apiInstance.createPickWave(xVolTenant, createWaveRequest, (error, data, response) => {
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
 **createWaveRequest** | [**CreateWaveRequest**](CreateWaveRequest.md)| Request to create a new pick wave(s) | 

### Return type

[**CreateWaveResponse**](CreateWaveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOpenPickWaves

> [Wave] getOpenPickWaves(xVolTenant, locationId)



Get Open Pick Waves

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.WaveControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let locationId = 56; // Number | Location Identifier
apiInstance.getOpenPickWaves(xVolTenant, locationId, (error, data, response) => {
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
 **locationId** | **Number**| Location Identifier | 

### Return type

[**[Wave]**](Wave.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWaveDetails

> Wave getWaveDetails(xVolTenant, waveId)



Get Wave Details

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.WaveControllerApi();
let xVolTenant = 56; // Number | Tenant ID
let waveId = 56; // Number | Wave Identifier
apiInstance.getWaveDetails(xVolTenant, waveId, (error, data, response) => {
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
 **waveId** | **Number**| Wave Identifier | 

### Return type

[**Wave**](Wave.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryWaveSuggestion

> WaveSuggestionResponse queryWaveSuggestion(waveSuggestionRequest)



Query Wave Suggestion (as a post)

### Example

```javascript
import Inventory from 'inventory';

let apiInstance = new Inventory.WaveControllerApi();
let waveSuggestionRequest = new Inventory.WaveSuggestionRequest(); // WaveSuggestionRequest | Request to query for a pick wave suggestion
apiInstance.queryWaveSuggestion(waveSuggestionRequest, (error, data, response) => {
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
 **waveSuggestionRequest** | [**WaveSuggestionRequest**](WaveSuggestionRequest.md)| Request to query for a pick wave suggestion | 

### Return type

[**WaveSuggestionResponse**](WaveSuggestionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

