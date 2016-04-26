"use strict";
var gulp = require("gulp");
var istanbul = require('gulp-istanbul');
var protractor = require("gulp-protractor").protractor;
var gulpSequence = require('gulp-sequence');
var rename = require('gulp-rename');
var exec = require('child_process').exec;

gulp.task('cover', gulpSequence(
    'copy-sources',
    'instr',
    'protractor',
    'replace-report',
    'report'
  ));

gulp.task('copy-sources', function () {
  return gulp.src(['app/**'])
    .pipe(gulp.dest('test/'));
});

gulp.task('instr', function () {
  return gulp.src('app/**/*.js')
    .pipe(istanbul({
      includeUntested: true,
      coverageVariable: '$$coverage$$',
    }))
    .pipe(gulp.dest('test/'));
});

gulp.task('protractor', function () {
  return gulp.src('./e2e-tests/scenarios.js')
    .pipe(protractor({
      configFile: "./e2e-tests/protractor.conf.js"
    }));
});

gulp.task('replace-report', function () {
  return  gulp.src('./coverage/custom/coverage.json')
    .pipe(gulp.dest('./coverage'))
    .on('finish', function () {
      return gulp.src('./coverage/custom/coverage.json')
        .pipe(rename('coverage-final.json'))
        .pipe(gulp.dest('./coverage'));
    });
});

gulp.task('report', function (cb) {
  exec('node report.js', function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});