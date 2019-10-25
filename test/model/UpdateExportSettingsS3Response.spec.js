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
    instance = new Inventory.UpdateExportSettingsS3Response();
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

  describe('UpdateExportSettingsS3Response', function() {
    it('should create an instance of UpdateExportSettingsS3Response', function() {
      // uncomment below and update the code to test UpdateExportSettingsS3Response
      //var instane = new Inventory.UpdateExportSettingsS3Response();
      //expect(instance).to.be.a(Inventory.UpdateExportSettingsS3Response);
    });

    it('should have the property tenantID (base name: "tenantID")', function() {
      // uncomment below and update the code to test the property tenantID
      //var instane = new Inventory.UpdateExportSettingsS3Response();
      //expect(instance).to.be();
    });

    it('should have the property exportSettingsS3ID (base name: "exportSettingsS3ID")', function() {
      // uncomment below and update the code to test the property exportSettingsS3ID
      //var instane = new Inventory.UpdateExportSettingsS3Response();
      //expect(instance).to.be();
    });

    it('should have the property exportSettingsID (base name: "exportSettingsID")', function() {
      // uncomment below and update the code to test the property exportSettingsID
      //var instane = new Inventory.UpdateExportSettingsS3Response();
      //expect(instance).to.be();
    });

  });

}));
