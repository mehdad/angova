module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files : [
      // include relevant Angular files and libs
      'app/lib/angular/angular.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/lib/angular-animate/angular-animate.js',
      'app/lib/angular-cookies/angular-cookies.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-resource/angular-resource.js',
      'app/lib/angular-touch/angular-touch.js',
      'app/lib/angular-sanitize/angular-sanitize.js',

      'app/*[!lib]*/*.js',
      'app/*[!lib]*/*[!tests]*/*.js',
      'app/*[!lib]*/tests/unit/*.js',
      // include js files
      'app/app.js',
    ],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
