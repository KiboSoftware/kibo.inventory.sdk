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
import OrderItemInformation from '../model/OrderItemInformation';
import OrderItemInformationRequest from '../model/OrderItemInformationRequest';
import OrderItemLogRequest from '../model/OrderItemLogRequest';
import OrderItemLogResponse from '../model/OrderItemLogResponse';

/**
* OrderItemController service.
* @module api/OrderItemControllerApi
* @version 5.0
*/
export default class OrderItemControllerApi {

    /**
    * Constructs a new OrderItemControllerApi. 
    * @alias module:api/OrderItemControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getOrderItemInformation operation.
     * @callback module:api/OrderItemControllerApi~getOrderItemInformationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderItemInformation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Item Information
     * @param {Number} xVolTenant Tenant ID
     * @param {module:model/OrderItemInformationRequest} orderItemInformationRequest Request to retrieve order item information
     * @param {module:api/OrderItemControllerApi~getOrderItemInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderItemInformation>}
     */
    getOrderItemInformation(xVolTenant, orderItemInformationRequest, callback) {
      let postBody = orderItemInformationRequest;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling getOrderItemInformation");
      }
      // verify the required parameter 'orderItemInformationRequest' is set
      if (orderItemInformationRequest === undefined || orderItemInformationRequest === null) {
        throw new Error("Missing the required parameter 'orderItemInformationRequest' when calling getOrderItemInformation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [OrderItemInformation];
      return this.apiClient.callApi(
        '/v5/inventory/getOrderItemInformation/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderItemLog operation.
     * @callback module:api/OrderItemControllerApi~getOrderItemLogCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderItemLogResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Item Log
     * @param {Number} xVolTenant Tenant ID
     * @param {module:model/OrderItemLogRequest} orderItemLogRequest Request to retrieve order item log(s)
     * @param {module:api/OrderItemControllerApi~getOrderItemLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderItemLogResponse>}
     */
    getOrderItemLog(xVolTenant, orderItemLogRequest, callback) {
      let postBody = orderItemLogRequest;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling getOrderItemLog");
      }
      // verify the required parameter 'orderItemLogRequest' is set
      if (orderItemLogRequest === undefined || orderItemLogRequest === null) {
        throw new Error("Missing the required parameter 'orderItemLogRequest' when calling getOrderItemLog");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [OrderItemLogResponse];
      return this.apiClient.callApi(
        '/v5/inventory/getOrderItemLog/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}