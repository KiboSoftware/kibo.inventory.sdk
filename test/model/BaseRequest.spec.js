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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Inventory);
  }
}(this, function(expect, Inventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Inventory.BaseRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BaseRequest', function() {
    it('should create an instance of BaseRequest', function() {
      // uncomment below and update the code to test BaseRequest
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be.a(Inventory.BaseRequest);
    });

    it('should have the property locationCode (base name: "locationCode")', function() {
      // uncomment below and update the code to test the property locationCode
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property userID (base name: "userID")', function() {
      // uncomment below and update the code to test the property userID
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageNum (base name: "pageNum")', function() {
      // uncomment below and update the code to test the property pageNum
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortBy (base name: "sortBy")', function() {
      // uncomment below and update the code to test the property sortBy
      //var instane = new Inventory.BaseRequest();
      //expect(instance).to.be();
    });

  });

}));
