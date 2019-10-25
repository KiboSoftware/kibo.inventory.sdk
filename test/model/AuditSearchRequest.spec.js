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
    instance = new Inventory.AuditSearchRequest();
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

  describe('AuditSearchRequest', function() {
    it('should create an instance of AuditSearchRequest', function() {
      // uncomment below and update the code to test AuditSearchRequest
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be.a(Inventory.AuditSearchRequest);
    });

    it('should have the property auditID (base name: "auditID")', function() {
      // uncomment below and update the code to test the property auditID
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property binName (base name: "binName")', function() {
      // uncomment below and update the code to test the property binName
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property auditStatus (base name: "auditStatus")', function() {
      // uncomment below and update the code to test the property auditStatus
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateRange (base name: "dateRange")', function() {
      // uncomment below and update the code to test the property dateRange
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new Inventory.AuditSearchRequest();
      //expect(instance).to.be();
    });

  });

}));
