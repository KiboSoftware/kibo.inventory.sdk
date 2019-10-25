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
import InlineResponse404 from '../model/InlineResponse404';
import JobQueueResponse from '../model/JobQueueResponse';

/**
* JobController service.
* @module api/JobControllerApi
* @version 5.0
*/
export default class JobControllerApi {

    /**
    * Constructs a new JobControllerApi. 
    * @alias module:api/JobControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getJob operation.
     * @callback module:api/JobControllerApi~getJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobQueueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the specified job
     * @param {Number} xVolTenant Tenant ID
     * @param {Number} jobID Id of bin to get
     * @param {module:api/JobControllerApi~getJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobQueueResponse}
     */
    getJob(xVolTenant, jobID, callback) {
      let postBody = null;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling getJob");
      }
      // verify the required parameter 'jobID' is set
      if (jobID === undefined || jobID === null) {
        throw new Error("Missing the required parameter 'jobID' when calling getJob");
      }

      let pathParams = {
        'jobID': jobID
      };
      let queryParams = {
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobQueueResponse;
      return this.apiClient.callApi(
        '/v1/queue/{jobID}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobs operation.
     * @callback module:api/JobControllerApi~getJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobQueueResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the requested jobs
     * @param {Number} xVolTenant Tenant ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.locationCode Tenant specified unique Identifier of the owning location
     * @param {Number} opts.limit The maximum number of results to return, defaults to 100 for most
     * @param {String} opts.owner User that owns the job
     * @param {Array.<module:model/String>} opts.types Type of the Job Queue Request
     * @param {String} opts.originalFilename The full name of the file that was picked up at the secure droppoint server before being split up by location.
     * @param {module:api/JobControllerApi~getJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JobQueueResponse>}
     */
    getJobs(xVolTenant, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xVolTenant' is set
      if (xVolTenant === undefined || xVolTenant === null) {
        throw new Error("Missing the required parameter 'xVolTenant' when calling getJobs");
      }

      let pathParams = {
      };
      let queryParams = {
        'locationCode': opts['locationCode'],
        'limit': opts['limit'],
        'owner': opts['owner'],
        'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),
        'originalFilename': opts['originalFilename']
      };
      let headerParams = {
        'x-vol-tenant': xVolTenant
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [JobQueueResponse];
      return this.apiClient.callApi(
        '/v1/queue/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
