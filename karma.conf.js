module.exports = function(config) {
  config.set({
    autoWatch: true,
    singleRun: true,

    browsers: ['Chrome'],

    frameworks: [
      'jspm',
      'mocha',
      'sinon',
      'chai'
    ],

    client: {
      chai: {
        includeStack: true
      }
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jspm',
      'karma-mocha',
      'karma-sinon',
      'karma-chai'
    ],

    jspm: {
      loadFiles: [
        'spec/**/*.spec.js'
      ],
      serveFiles: [
        'lib/**/*.js'
      ],
      config: "jspm.config.js",
      stripExtension: false
    },

    proxies: {
      '/lib/': '/base/lib/',
      '/spec/': '/base/spec/',
      '/jspm_packages/': '/base/jspm_packages/',
      '/node_modules/': '/base/node_modules/'
    },

    files: []
  });
};
