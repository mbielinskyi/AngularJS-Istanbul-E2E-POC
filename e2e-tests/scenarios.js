'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });

  describe('view1button', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should output text to console when clicked', function() {
      element(by.css('button[ng-click]')).click();

      expect(element(by.css('p[ng-bind]')).getText()).
        toMatch("Test");
    });

  });

  var fs = require('fs');

  describe('Output the code coverage objects', function() {
    it('should output the coverage object.', function() {
      browser.driver.executeScript("return window.$$coverage$$;").then(function(val) {
        fs.writeFileSync("coverage/custom/coverage.json", JSON.stringify(val));
      });
    });
  });

});
