# Inventory.OrderItemInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderID** | **Number** | Order Identifier | [optional] 
**orderItemID** | **Number** | Order Item Identifier | [optional] 
**locationID** | **Number** | Location Identifier | [optional] 
**locationActive** | **Boolean** | Flag for whether the location is active | [optional] 
**locationCode** | **Number** | External Store Identifier | [optional] 
**locationName** | **String** | Location Name | [optional] 
**binID** | **Number** | Bin Identifier | [optional] 
**partNumber** | **String** | Part/Product Number | [optional] 
**upc** | **String** | Universal Product Code | [optional] 
**sku** | **String** | Stock Keeping Unit | [optional] 
**ltd** | **String** | Custom field used for store prioritization | [optional] 
**floor** | **Number** | Absolute minimum quantity of this item that should be in stock at any time | [optional] 
**safetyStock** | **Number** | Quantity of this item the location wants to keep in stock to ensure stock isn&#39;t completely depleted | [optional] 
**onHand** | **Number** | The quantity the location has in its possession | [optional] 
**available** | **Number** | The quantity the location has that are available for purchase | [optional] 
**allocated** | **Number** | The quantity the location has that are allocated | [optional] 
**allocates** | **Number** | Total number of allocations | [optional] 
**deallocates** | **Number** | Total number of deallocations | [optional] 
**fulfills** | **Number** | Total number of fulfillments. Should never be greater than 1. | [optional] 
**picks** | **Number** | Total number of picks (WMS only) | [optional] 
**pendingQuantity** | **Number** | Pending quantity (WMS only) | [optional] 
**events** | [**[OrderItemInformationEvent]**](OrderItemInformationEvent.md) | Order Identifier | [optional] 


