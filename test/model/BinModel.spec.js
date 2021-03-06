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
    instance = new Inventory.BinModel();
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

  describe('BinModel', function() {
    it('should create an instance of BinModel', function() {
      // uncomment below and update the code to test BinModel
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be.a(Inventory.BinModel);
    });

    it('should have the property binID (base name: "binID")', function() {
      // uncomment below and update the code to test the property binID
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be();
    });

    it('should have the property locationID (base name: "locationID")', function() {
      // uncomment below and update the code to test the property locationID
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be();
    });

    it('should have the property binTypeID (base name: "binTypeID")', function() {
      // uncomment below and update the code to test the property binTypeID
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be();
    });

    it('should have the property binStatusID (base name: "binStatusID")', function() {
      // uncomment below and update the code to test the property binStatusID
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Inventory.BinModel();
      //expect(instance).to.be();
    });

  });

}));
