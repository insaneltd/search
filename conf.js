// conf.js
exports.config = {
  framework: 'jasmine',
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['performSearch.js'],
  directConnect: true,
// Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 60000    
  }
}

