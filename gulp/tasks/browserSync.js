var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync',  function() {
  browserSync.init(['src/**'], {
    server: {
      baseDir: ['src'],
      routes:{
      	"/bower_components":"bower_components"
      }
    }
  });
});
