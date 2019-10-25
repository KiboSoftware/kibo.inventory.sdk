/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AggregateRequest from '../model/AggregateRequest';
import AggregateResponse from '../model/AggregateResponse';
import InventoryRequest from '../model/InventoryRequest';
import InventoryResponse from '../model/InventoryResponse';
import ItemQuantity from '../model/ItemQuantity';
import RequestLocation from '../model/RequestLocation';

/**
* InventoryController service.
* @module api/InventoryControllerApi
* @version 5.0
*/
export default class InventoryControllerApi {

    /**
    * Constructs a new InventoryControllerApi. 
    * @alias module:api/InventoryControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the aggregate operation.
     * @callback module:api/InventoryControllerApi~aggregateCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AggregateResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregates Inventory
     * @param {Number} xVolTenant Tenant ID
     * @param {module:model/AggregateRequest} aggregateRequest Request to aggregate inventory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xVolSite Site ID
     * @param {module:api/InventoryControllerApi~aggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AggregateResponse>}
     */
    aggregate(xVolTenant, aggregateRequest, opts, callback) {
      opts = opts || {};
      let postBody = aggregateRequest;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling aggregate");
      }
      // verify the required parameter 'aggregateRequest' is set
      if (aggregateRequest === undefined || aggregateRequest === null) {
        throw new Error("Missing the required parameter 'aggregateRequest' when calling aggregate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant,
        'x-vol-site': opts['xVolSite']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [AggregateResponse];
      return this.apiClient.callApi(
        '/v5/inventory/aggregate/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventory operation.
     * @callback module:api/InventoryControllerApi~getInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get inventory from specified location
     * @param {Number} xVolTenant Tenant ID
     * @param {module:model/String} type Type of request enum
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xVolSite Site ID
     * @param {Array.<module:model/ItemQuantity>} opts.items List of Items to search on
     * @param {module:model/RequestLocation} opts.requestLocation Location for Request
     * @param {Array.<String>} opts.locationWhitelist List of location codes that are allowed to be included in results
     * @param {Array.<String>} opts.locationBlacklist List of location codes that are NOT allowed to be included in results
     * @param {Number} opts.limit The maximum number of results to return, defaults to 100 for most
     * @param {Boolean} opts.ignoreSafetyStock Whether to ignore the safety stock buffer put in place
     * @param {Boolean} opts.includeNegativeInventory Whether to allow items with negative inventory in the results
     * @param {Boolean} opts.shippingLocation Whether to limit results to locations that are shipping enabled
     * @param {Boolean} opts.transferEnabled Filter results by locations that have transfer enabled (true) or don't (false)
     * @param {Boolean} opts.pickup Filter results by locations that are pickup-enabled (true) or not (false)
     * @param {Boolean} opts.includeInAggregate Filter results by locations that have aggregate export enabled (true) or don't (false)
     * @param {Boolean} opts.includeAttributes Flag to include attributes or not
     * @param {module:api/InventoryControllerApi~getInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventoryResponse>}
     */
    getInventory(xVolTenant, type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling getInventory");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getInventory");
      }

      let pathParams = {
      };
      let queryParams = {
        'type': type,
        'items': this.apiClient.buildCollectionParam(opts['items'], 'multi'),
        'requestLocation': opts['requestLocation'],
        'locationWhitelist': this.apiClient.buildCollectionParam(opts['locationWhitelist'], 'multi'),
        'locationBlacklist': this.apiClient.buildCollectionParam(opts['locationBlacklist'], 'multi'),
        'limit': opts['limit'],
        'ignoreSafetyStock': opts['ignoreSafetyStock'],
        'includeNegativeInventory': opts['includeNegativeInventory'],
        'shippingLocation': opts['shippingLocation'],
        'transferEnabled': opts['transferEnabled'],
        'pickup': opts['pickup'],
        'includeInAggregate': opts['includeInAggregate'],
        'includeAttributes': opts['includeAttributes']
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant,
        'x-vol-site': opts['xVolSite']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InventoryResponse];
      return this.apiClient.callApi(
        '/v5/inventory/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postQueryInventory operation.
     * @callback module:api/InventoryControllerApi~postQueryInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Queries for specified inventory at given location
     * @param {Number} xVolTenant Tenant ID
     * @param {module:model/InventoryRequest} inventoryRequest Request to get inventory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xVolSite Site ID
     * @param {module:api/InventoryControllerApi~postQueryInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventoryResponse>}
     */
    postQueryInventory(xVolTenant, inventoryRequest, opts, callback) {
      opts = opts || {};
      let postBody = inventoryRequest;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling postQueryInventory");
      }
      // verify the required parameter 'inventoryRequest' is set
      if (inventoryRequest === undefined || inventoryRequest === null) {
        throw new Error("Missing the required parameter 'inventoryRequest' when calling postQueryInventory");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant,
        'x-vol-site': opts['xVolSite']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [InventoryResponse];
      return this.apiClient.callApi(
        '/v5/inventory/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}