var compass      = require('gulp-compass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

gulp.task('compass', function() {
	return gulp.src('./src/sass/**')
		.pipe(compass({
			config_file: 'compass.rb',
			css: 'src/css',
			sass: 'src/sass'
		}))
		.pipe(browserSync.reload({stream:true}))
		.on('error', handleErrors);
});
