# Inventory.RequestLocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **String** | Unit of distance used for radius | [optional] [default to &#39;MILES&#39;]
**radius** | **Number** | Distance from location | [optional] 
**postalCode** | **String** | Postal Code of this location | [optional] 
**latitude** | **Number** | Latitude coordinate of this location | [optional] 
**longitude** | **Number** | Longitude coordinate of this location | [optional] 
**countryCode** | **String** | Country Code for this location | [optional] 
**locationCode** | **String** | Location Code for this location. This being set will trigger GetInventoryByLocation | [optional] 



## Enum: UnitEnum


* `MILES` (value: `"MILES"`)

* `KM` (value: `"KM"`)




