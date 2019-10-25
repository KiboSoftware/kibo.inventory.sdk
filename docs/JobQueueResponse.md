# Inventory.JobQueueResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobID** | **Number** | Internal identifier that uniquely identifies a single job | [optional] 
**tenantID** | **Number** | Unique internal identifier of the tenant that owns the job | [optional] 
**locationID** | **Number** | Unique internal Identifier of the owning location | [optional] 
**type** | **String** | Purpose of the job | [optional] 
**added** | **String** | Time and date the job was added to the queue in ISO8601 format in UTC | [optional] 
**started** | **String** | Time and date the job was started in ISO8601 format in UTC | [optional] 
**finished** | **String** | Time and date the job was finished in ISO8601 format in UTC | [optional] 
**originalFilename** | **String** | The full name of the file that was picked up at the secure droppoint server before being split up by location. Applies only to refresh and adjust jobs created via file fetch process | [optional] 
**hasData** | **Boolean** | True if the job was not created from a fetched file | [optional] 
**itemCount** | **Number** | The number of items processed, only for job types REFRESH and ADJUST | [optional] 
**status** | **String** | Current status of job completion | [optional] 



## Enum: TypeEnum


* `REFRESH` (value: `"REFRESH"`)

* `ADJUST` (value: `"ADJUST"`)

* `RELEASE_SHIPMENTS` (value: `"RELEASE_SHIPMENTS"`)

* `CREATE_PICK_WAVE` (value: `"CREATE_PICK_WAVE"`)

* `CLOSE_PICK_WAVE` (value: `"CLOSE_PICK_WAVE"`)

* `PUT_AWAY_FILE` (value: `"PUT_AWAY_FILE"`)

* `SHORT_PICK_ERROR` (value: `"SHORT_PICK_ERROR"`)

* `BIN_AUDIT_START` (value: `"BIN_AUDIT_START"`)

* `BIN_AUDIT_COMPLETION` (value: `"BIN_AUDIT_COMPLETION"`)

* `CREATE_BIN_AUDIT` (value: `"CREATE_BIN_AUDIT"`)

* `RELEASE_PENDING_ITEMS` (value: `"RELEASE_PENDING_ITEMS"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `WORKING` (value: `"WORKING"`)

* `SUCCESS` (value: `"SUCCESS"`)

* `FAILED` (value: `"FAILED"`)




