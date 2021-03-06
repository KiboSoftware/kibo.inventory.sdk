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
    instance = new Inventory.RefreshItem();
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

  describe('RefreshItem', function() {
    it('should create an instance of RefreshItem', function() {
      // uncomment below and update the code to test RefreshItem
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be.a(Inventory.RefreshItem);
    });

    it('should have the property partNumber (base name: "partNumber")', function() {
      // uncomment below and update the code to test the property partNumber
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property binID (base name: "binID")', function() {
      // uncomment below and update the code to test the property binID
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property ltd (base name: "ltd")', function() {
      // uncomment below and update the code to test the property ltd
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property floor (base name: "floor")', function() {
      // uncomment below and update the code to test the property floor
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property safetyStock (base name: "safetyStock")', function() {
      // uncomment below and update the code to test the property safetyStock
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property retailPrice (base name: "retailPrice")', function() {
      // uncomment below and update the code to test the property retailPrice
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property currencyID (base name: "currencyID")', function() {
      // uncomment below and update the code to test the property currencyID
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new Inventory.RefreshItem();
      //expect(instance).to.be();
    });

  });

}));
