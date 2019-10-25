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
    instance = new Inventory.WaveContent();
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

  describe('WaveContent', function() {
    it('should create an instance of WaveContent', function() {
      // uncomment below and update the code to test WaveContent
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be.a(Inventory.WaveContent);
    });

    it('should have the property orderID (base name: "orderID")', function() {
      // uncomment below and update the code to test the property orderID
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property shipmentID (base name: "shipmentID")', function() {
      // uncomment below and update the code to test the property shipmentID
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property binName (base name: "binName")', function() {
      // uncomment below and update the code to test the property binName
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property partNumber (base name: "partNumber")', function() {
      // uncomment below and update the code to test the property partNumber
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property actualQuantity (base name: "actualQuantity")', function() {
      // uncomment below and update the code to test the property actualQuantity
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

    it('should have the property slotID (base name: "slotID")', function() {
      // uncomment below and update the code to test the property slotID
      //var instane = new Inventory.WaveContent();
      //expect(instance).to.be();
    });

  });

}));