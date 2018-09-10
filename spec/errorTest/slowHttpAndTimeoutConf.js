var env = require('../environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'jasmine',

  specs: [
    'baseCase/slow_http_and_timeout_spec.js'
  ],

  multiCapabilities: [{
    'browserName': 'chrome'
  }],

  baseUrl: env.baseUrl + '/ng1/',

  allScriptsTimeout: 4000 // Each test waits on something that has a 5 second tick.
};