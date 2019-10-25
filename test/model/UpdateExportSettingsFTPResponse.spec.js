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
    instance = new Inventory.UpdateExportSettingsFTPResponse();
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

  describe('UpdateExportSettingsFTPResponse', function() {
    it('should create an instance of UpdateExportSettingsFTPResponse', function() {
      // uncomment below and update the code to test UpdateExportSettingsFTPResponse
      //var instane = new Inventory.UpdateExportSettingsFTPResponse();
      //expect(instance).to.be.a(Inventory.UpdateExportSettingsFTPResponse);
    });

    it('should have the property tenantID (base name: "tenantID")', function() {
      // uncomment below and update the code to test the property tenantID
      //var instane = new Inventory.UpdateExportSettingsFTPResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportSettingsFTPName (base name: "exportSettingsFTPName")', function() {
      // uncomment below and update the code to test the property exportSettingsFTPName
      //var instane = new Inventory.UpdateExportSettingsFTPResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportSettingsName (base name: "exportSettingsName")', function() {
      // uncomment below and update the code to test the property exportSettingsName
      //var instane = new Inventory.UpdateExportSettingsFTPResponse();
      //expect(instance).to.be();
    });

  });

}));