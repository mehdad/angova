// Generated on 2016-01-26 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var yeoman = {
  app: require('./bower.json').appPath || 'app',
  dist: '../www'
};

var paths = {
  scripts: [yeoman.app + '/*[!lib]*/*/*.js'],
  styles: [yeoman.app + '/asset/styles/*.css',yeoman.app + '/lib/**/*.css'],
  test: [yeoman.app + '/*[!lib]*/tests/unit/*.js'],
  testRequire: [
    yeoman.app + '/lib/angular/angular.js',
    yeoman.app + '/lib/angular-mocks/angular-mocks.js',
    yeoman.app + '/lib/angular-animate/angular-animate.js',
    yeoman.app + '/lib/angular-cookies/angular-cookies.js',
    yeoman.app + '/lib/angular-route/angular-route.js',
    yeoman.app + '/lib/angular-resource/angular-resource.js',
    yeoman.app + '/lib/angular-touch/angular-touch.js',
    yeoman.app + '/lib/angular-sanitize/angular-sanitize.js',
    yeoman.app + '/app.js',
    yeoman.app + '/*[!lib]*/**/*.js',
    yeoman.app + '/*[!lib]*/**/controller/*.js',
    yeoman.app + '/*[!lib]*/**/service/*.js',
    yeoman.app + '/*[!lib]*/**/controller/*.js',
    yeoman.app + '/*[!lib]*/**/config/*.js',
    yeoman.app + '/*[!lib]*/tests/unit/*.js'
  ],
  karma: 'karma.conf.js',
  views: {
    main: yeoman.app + '/index.html',
    files: [yeoman.app + '/*[!lib]*/views/*.html']
  }
};

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
  .pipe($.jshint, '.jshintrc')
  .pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles');

///////////
// Tasks //
///////////

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(styles());
});

gulp.task('lint:scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(lintScripts());
});

gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function () {
  openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
  $.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000
  });
});

gulp.task('start:server:test', function() {
  $.connect.server({
    root: ['test', yeoman.app, '.tmp'],
    livereload: true,
    port: 9001
  });
});

gulp.task('watch', function () {
  $.watch(paths.styles)
    .pipe($.plumber())
    .pipe(styles())
    .pipe($.connect.reload());

  $.watch(paths.views.files)
    .pipe($.plumber())
    .pipe($.connect.reload());

  $.watch(paths.scripts)
    .pipe($.plumber())
    .pipe(lintScripts())
    .pipe($.connect.reload());

  $.watch(paths.test)
    .pipe($.plumber())
    .pipe(lintScripts());

  gulp.watch('bower.json', ['bower']);
});

gulp.task('serve', function (cb) {
  runSequence('clean:tmp',
    ['lint:scripts'],
    ['start:client'],
    'watch', cb);
});

gulp.task('serve:prod', function() {
  $.connect.server({
    root: [yeoman.dist],
    livereload: true,
    port: 9000
  });
});

gulp.task('test', ['start:server:test'], function () {
  var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: paths.karma,
      action: 'watch'
    }));
});

// inject bower components
gulp.task('bower', function () {
  return gulp.src(paths.views.main)
    .pipe(wiredep({
      directory: yeoman.app + '/app/lib',
      ignorePath: '..'
    }))
  .pipe(gulp.dest(yeoman.app + '/views'));
});

///////////
// Build //
///////////

gulp.task('clean:dist', function (cb) {
  rimraf('../www', cb);
});

gulp.task('client:build', ['html', 'styles'], function () {
  var jsFilter = $.filter('**/*.js','*[!lib]*/**/.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src(paths.views.main)
    .pipe($.useref({searchPath: [yeoman.app, '.tmp']}))
    .pipe(jsFilter)
    .pipe($.ngAnnotate())

    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.minifyCss({cache: true}))
    .pipe(cssFilter.restore())
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('html', function () {
  return gulp.src(yeoman.app + '/views/**/*')
    .pipe(gulp.dest(yeoman.dist + '/views'));
});

gulp.task('images', function () {
  return gulp.src(yeoman.app + '/images/**/*')
    .pipe($.cache($.imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })))
    .pipe(gulp.dest(yeoman.dist + '/images'));
});

gulp.task('copy:extras', function () {
  return gulp.src(yeoman.app + '/*/.*', { dot: true })
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function () {
  return gulp.src(yeoman.app + '/fonts/**/*')
    .pipe(gulp.dest(yeoman.dist + '/fonts'));
});

gulp.task('copy:views', function () {
  return gulp.src(yeoman.app + '/*[!lib]*/views/*')
    .pipe(gulp.dest(yeoman.dist + '/'));
});

gulp.task('build', ['clean:dist'], function () {
  runSequence(['images', 'copy:extras', 'copy:fonts','copy:views', 'client:build']);
});

gulp.task('default', ['serve']);
