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
    instance = new Inventory.Wave();
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

  describe('Wave', function() {
    it('should create an instance of Wave', function() {
      // uncomment below and update the code to test Wave
      //var instane = new Inventory.Wave();
      //expect(instance).to.be.a(Inventory.Wave);
    });

    it('should have the property waveID (base name: "waveID")', function() {
      // uncomment below and update the code to test the property waveID
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property locationID (base name: "locationID")', function() {
      // uncomment below and update the code to test the property locationID
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property userID (base name: "userID")', function() {
      // uncomment below and update the code to test the property userID
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "orderType")', function() {
      // uncomment below and update the code to test the property orderType
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property contents (base name: "contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

    it('should have the property recoveryWaveID (base name: "recoveryWaveID")', function() {
      // uncomment below and update the code to test the property recoveryWaveID
      //var instane = new Inventory.Wave();
      //expect(instance).to.be();
    });

  });

}));
