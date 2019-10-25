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
    instance = new Inventory.ExportSettingsFTP();
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

  describe('ExportSettingsFTP', function() {
    it('should create an instance of ExportSettingsFTP', function() {
      // uncomment below and update the code to test ExportSettingsFTP
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be.a(Inventory.ExportSettingsFTP);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property exportSettingsID (base name: "exportSettingsID")', function() {
      // uncomment below and update the code to test the property exportSettingsID
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpServer (base name: "ftpServer")', function() {
      // uncomment below and update the code to test the property ftpServer
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpPort (base name: "ftpPort")', function() {
      // uncomment below and update the code to test the property ftpPort
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpDirectory (base name: "ftpDirectory")', function() {
      // uncomment below and update the code to test the property ftpDirectory
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpDirectoryControlFile (base name: "ftpDirectoryControlFile")', function() {
      // uncomment below and update the code to test the property ftpDirectoryControlFile
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpUser (base name: "ftpUser")', function() {
      // uncomment below and update the code to test the property ftpUser
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property ftpPassword (base name: "ftpPassword")', function() {
      // uncomment below and update the code to test the property ftpPassword
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property deliveryClass (base name: "deliveryClass")', function() {
      // uncomment below and update the code to test the property deliveryClass
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property controlFile (base name: "controlFile")', function() {
      // uncomment below and update the code to test the property controlFile
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property controlFileEmail (base name: "controlFileEmail")', function() {
      // uncomment below and update the code to test the property controlFileEmail
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property remoteFileName (base name: "remoteFileName")', function() {
      // uncomment below and update the code to test the property remoteFileName
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property controlFileName (base name: "controlFileName")', function() {
      // uncomment below and update the code to test the property controlFileName
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instane = new Inventory.ExportSettingsFTP();
      //expect(instance).to.be();
    });

  });

}));
