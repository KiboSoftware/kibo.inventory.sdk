# Inventory.CreateWaveRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of wave | [optional] 
**maxOrders** | **Number** | Maximum number of orders | [optional] 
**includeZeroInventory** | **Boolean** | Flag for including zero inventory items | [optional] 
**binRanges** | [**[BinRange]**](BinRange.md) | List of Bin Ranges | [optional] 
**orderDateRange** | [**DateRange**](DateRange.md) |  | [optional] 
**products** | **String** | Part/Product Number | [optional] 
**shippingOptions** | **String** | Shipping Options | [optional] 
**customOrderItemData** | **[[String]]** | Custom order item data | [optional] 



## Enum: TypeEnum


* `NORMAL` (value: `"NORMAL"`)

* `SPECIAL` (value: `"SPECIAL"`)

* `SINGLE` (value: `"SINGLE"`)

* `MULTIPLE` (value: `"MULTIPLE"`)





## Enum: ShippingOptionsEnum


* `STANDARD_ONLY` (value: `"STANDARD_ONLY"`)

* `EXPRESS_ONLY` (value: `"EXPRESS_ONLY"`)

* `ALL` (value: `"ALL"`)




