var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

gulp.task('usemin', function() {
  gulp.src('src/**/*.html')
    .pipe(usemin({
      css: [minifyCss()],
      html: [minifyHtml({empty: true})],
      js: [uglify()]
    }))
    .pipe(gulp.dest('build/'));
});