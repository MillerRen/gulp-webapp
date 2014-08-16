var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  gulp.src('src/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('src'));
});