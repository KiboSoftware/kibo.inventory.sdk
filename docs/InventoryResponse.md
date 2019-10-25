# Inventory.InventoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locationName** | **String** | Location Name | [optional] 
**locationCode** | **String** | Location Code | [optional] 
**tenantID** | **Number** | Tenant Identifier | [optional] 
**onHand** | **Number** | The quantity the location has in its possession | [optional] 
**available** | **Number** | The quantity the location has that are available for purchase | [optional] 
**allocated** | **Number** | The quantity the location has that are already allocated. | [optional] 
**pending** | **Number** | The quantity the location has that are pending. | [optional] 
**partNumber** | **String** | Part/Product Number | [optional] 
**upc** | **String** | Universal Product Code | [optional] 
**sku** | **String** | Stock Keeping Unit | [optional] 
**blockAssignment** | **Boolean** | Whether or not the product is blocked for assignment | [optional] 
**ltd** | **Number** | Custom field used for store prioritization | [optional] 
**floor** | **Number** | Absolute minimum quantity of this item that should be in stock at any time | [optional] 
**safetyStock** | **Number** | Quantity of this item the location wants to keep in stock to ensure stock isn&#39;t completely depleted | [optional] 
**distance** | **Number** | The distance in miles from this location to the item&#39;s destination | [optional] 
**directShip** | **Boolean** | Whether this location can ship to a consumer | [optional] 
**transferEnabled** | **Boolean** | Whether the location can ship to another location (store), thus restocking that location. | [optional] 
**pickup** | **Boolean** | Whether a consumer can pick up product at this location (store) | [optional] 
**countryCode** | **String** | The country code of this location | [optional] 
**currencyID** | **Number** | The currency identifier for the retailPrice | [optional] 
**retailPrice** | **Number** | The price of the product at this location | [optional] 
**attributes** | **[String]** | List of Inventory Attributes | [optional] 


