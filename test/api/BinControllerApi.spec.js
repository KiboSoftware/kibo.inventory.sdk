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
    instance = new Inventory.BinControllerApi();
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

  describe('BinControllerApi', function() {
    describe('createBin', function() {
      it('should call createBin successfully', function(done) {
        //uncomment below and update the code to test createBin
        //instance.createBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBin', function() {
      it('should call deleteBin successfully', function(done) {
        //uncomment below and update the code to test deleteBin
        //instance.deleteBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBin', function() {
      it('should call getBin successfully', function(done) {
        //uncomment below and update the code to test getBin
        //instance.getBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBinStatuses', function() {
      it('should call getBinStatuses successfully', function(done) {
        //uncomment below and update the code to test getBinStatuses
        //instance.getBinStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBinTypes', function() {
      it('should call getBinTypes successfully', function(done) {
        //uncomment below and update the code to test getBinTypes
        //instance.getBinTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBins', function() {
      it('should call getBins successfully', function(done) {
        //uncomment below and update the code to test getBins
        //instance.getBins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loadInventory', function() {
      it('should call loadInventory successfully', function(done) {
        //uncomment below and update the code to test loadInventory
        //instance.loadInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchBins', function() {
      it('should call searchBins successfully', function(done) {
        //uncomment below and update the code to test searchBins
        //instance.searchBins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBin', function() {
      it('should call updateBin successfully', function(done) {
        //uncomment below and update the code to test updateBin
        //instance.updateBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBins', function() {
      it('should call updateBins successfully', function(done) {
        //uncomment below and update the code to test updateBins
        //instance.updateBins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
