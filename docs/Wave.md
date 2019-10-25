# Inventory.Wave

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waveID** | **Number** | Wave Identifier | [optional] 
**locationID** | **Number** | Location Identifier | [optional] 
**created** | **String** | When the wave was created | [optional] 
**userID** | **Number** | User Identifier for the wave creator | [optional] 
**orderType** | **String** | Order Type of the wave | [optional] 
**type** | **String** | Type of wave | [optional] 
**status** | **String** | Status of the wave | [optional] 
**contents** | [**[WaveContent]**](WaveContent.md) | List of Wave Contents | [optional] 
**recoveryWaveID** | **Number** | Wave Recovery Identifier | [optional] 



## Enum: OrderTypeEnum


* `ISPU` (value: `"ISPU"`)

* `STH` (value: `"STH"`)

* `TISPU` (value: `"TISPU"`)

* `TRANSFER` (value: `"TRANSFER"`)

* `DELIVERY` (value: `"DELIVERY"`)





## Enum: TypeEnum


* `NORMAL` (value: `"NORMAL"`)

* `SPECIAL` (value: `"SPECIAL"`)

* `SINGLE` (value: `"SINGLE"`)

* `MULTIPLE` (value: `"MULTIPLE"`)





## Enum: StatusEnum


* `ERROR` (value: `"ERROR"`)

* `PENDING` (value: `"PENDING"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `CLOSED` (value: `"CLOSED"`)

* `PENDING_RECOVERY` (value: `"PENDING_RECOVERY"`)




