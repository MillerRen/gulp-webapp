var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	//gulp.watch('src/htdocs/**', ['copy']);
	gulp.watch('src/js/**',['inject']);
});
