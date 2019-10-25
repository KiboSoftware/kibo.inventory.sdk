# Inventory.OrderItemLogRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifiers** | [**[OrderItemLogIdentifier]**](OrderItemLogIdentifier.md) | A list of order item log identifiers to search for | [optional] 
**orderBy** | **String** | Order Identifier | [optional] 
**limit** | **Number** | The maximum number of results to return | [optional] 
**type** | **String** | The type of logs to retrieve | [optional] 
**sortAscending** | **Boolean** | Whether to sort results ascending, based on orderBy | [optional] 



## Enum: OrderByEnum


* `ORDER_ID` (value: `"ORDER_ID"`)

* `ORDER_ITEM_ID` (value: `"ORDER_ITEM_ID"`)

* `INVENTORY_ID` (value: `"INVENTORY_ID"`)

* `TENANT_ID` (value: `"TENANT_ID"`)

* `LOCATION_ID` (value: `"LOCATION_ID"`)

* `USER_ID` (value: `"USER_ID"`)

* `QUANTITY` (value: `"QUANTITY"`)

* `TYPE` (value: `"TYPE"`)

* `RESOLVED` (value: `"RESOLVED"`)

* `FIXED` (value: `"FIXED"`)

* `DATE` (value: `"DATE"`)

* `SHIPMENT_ID` (value: `"SHIPMENT_ID"`)





## Enum: TypeEnum


* `ALLOCATE` (value: `"ALLOCATE"`)

* `DEALLOCATE` (value: `"DEALLOCATE"`)

* `FULFILL` (value: `"FULFILL"`)

* `PICK` (value: `"PICK"`)




