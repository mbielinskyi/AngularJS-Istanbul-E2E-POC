exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  baseUrl: 'http://localhost:8000/test/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};


/*
* 1. Compile and instrument code using task manager
* 2. Make copy of app
* 3. Replace currently used code with instrumented
* 4. Start server 
* 5. Point protractor to use instrumented version of App
* 6. Save istanbul report
*
*
*/