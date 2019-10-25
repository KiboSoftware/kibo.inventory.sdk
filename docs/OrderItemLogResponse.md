# Inventory.OrderItemLogResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderID** | **Number** | Order Identifier | [optional] 
**orderItemID** | **Number** | Order Item Identifier | [optional] 
**shipmentID** | **Number** | Shipment Identifier | [optional] 
**inventoryID** | **Number** | Inventory Identifier | [optional] 
**tenantID** | **Number** | Tenant Identifier | [optional] 
**locationCode** | **String** | Location Code Identifier | [optional] 
**userID** | **Number** | User Identifier | [optional] 
**quantity** | **Number** | The number of items affected for this log entry | [optional] 
**type** | **String** | The type of logs to retrieve | [optional] 
**resolved** | **Boolean** | Whether this event is resolved | [optional] 
**fixed** | **Boolean** | Whether this event has been fixed | [optional] 
**_date** | **String** | The date of this log entry | [optional] 
**partNumber** | **String** | Part/Product Number | [optional] 
**upc** | **String** | Universal Product Code | [optional] 



## Enum: TypeEnum


* `ALLOCATE` (value: `"ALLOCATE"`)

* `DEALLOCATE` (value: `"DEALLOCATE"`)

* `FULFILL` (value: `"FULFILL"`)

* `PICK` (value: `"PICK"`)




