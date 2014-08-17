var gulp = require('gulp');
var inject = require("gulp-inject");

gulp.task('inject', function () {
  var target = gulp.src('src/*.html');
  var sources = gulp.src(['src/**/*.js', 'src/**/*.css'], {read: false});

  return target.pipe(inject(sources,{relative:true}))
    .pipe(gulp.dest('src/'));
});
