var gulp = require('gulp');
var inject = require("gulp-inject");

gulp.task('inject', function () {
  var target = gulp.src('src/htdocs/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['src/**/*.js', 'src/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('src/htdocs'));
});
