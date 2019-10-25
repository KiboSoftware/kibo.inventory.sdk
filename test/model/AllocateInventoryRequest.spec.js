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
    instance = new Inventory.AllocateInventoryRequest();
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

  describe('AllocateInventoryRequest', function() {
    it('should create an instance of AllocateInventoryRequest', function() {
      // uncomment below and update the code to test AllocateInventoryRequest
      //var instane = new Inventory.AllocateInventoryRequest();
      //expect(instance).to.be.a(Inventory.AllocateInventoryRequest);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new Inventory.AllocateInventoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "orderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instane = new Inventory.AllocateInventoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderWeight (base name: "orderWeight")', function() {
      // uncomment below and update the code to test the property orderWeight
      //var instane = new Inventory.AllocateInventoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property decrementOnHandOnDeallocate (base name: "decrementOnHandOnDeallocate")', function() {
      // uncomment below and update the code to test the property decrementOnHandOnDeallocate
      //var instane = new Inventory.AllocateInventoryRequest();
      //expect(instance).to.be();
    });

  });

}));