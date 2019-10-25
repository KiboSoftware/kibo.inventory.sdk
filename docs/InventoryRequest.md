# Inventory.InventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Inventory Request Type Enum | 
**items** | [**[ItemQuantity]**](ItemQuantity.md) | List of Items to search on | 
**requestLocation** | [**RequestLocation**](.md) |  | [optional] 
**limit** | **Number** | The maximum number of results to return, defaults to 100 for most | [optional] 
**locationWhitelist** | **[String]** | List of location codes that are allowed to be included in results | [optional] 
**locationPriorityList** | **[String]** | List of location codes that should be returned before all others, preventing them from being excluded by limit | [optional] 
**locationBlacklist** | **[String]** | List of location codes that are NOT allowed to be included in results | [optional] 
**ignoreSafetyStock** | **Boolean** | Whether to ignore the safety stock buffer put in place | [optional] 
**includeNegativeInventory** | **Boolean** | Whether to allow items with negative inventory in the results | [optional] 
**directShip** | **Boolean** | Whether to limit results to locations that are shipping enabled | [optional] 
**transferEnabled** | **Boolean** | Filter results by locations that have transfer enabled (true) or don&#39;t (false) | [optional] 
**pickup** | **Boolean** | Filter results by locations that have finderbot enabled (true) or don&#39;t (false) | [optional] 
**includeInAggregateExport** | **Boolean** | Filter results by locations that have aggregate export enabled (true) or don&#39;t (false) | [optional] 
**includeInLocationExport** | **Boolean** | Filter results by locations that have physical storefronts (true) or don&#39;t (false) | [optional] 
**excludeBlockedAssignment** | **Boolean** | Filter out results that are blocked from assignment (at the product/location level)  | [optional] 
**includeAttributes** | **Boolean** | Flag to include attributes or not | [optional] 
**sortByEnum** | **String** | What to sort the inventory results by. Only used for GetInventoryByLocation calls (locationCode must be set) | [optional] 



## Enum: TypeEnum


* `ALL` (value: `"ALL"`)

* `PARTIAL` (value: `"PARTIAL"`)

* `ANY` (value: `"ANY"`)

* `ALL_STORES` (value: `"ALL_STORES"`)





## Enum: SortByEnumEnum


* `ON_HAND` (value: `"ON_HAND"`)

* `AVAILABLE` (value: `"AVAILABLE"`)

* `ALLOCATED` (value: `"ALLOCATED"`)

* `PART_NUMBER` (value: `"PART_NUMBER"`)

* `PRODUCT_ID` (value: `"PRODUCT_ID"`)




