/* eslint-disable */
/* jshint esnext: true */

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task("browserSync", function(){
	browserSync.init({
		server: {
			baseDir: './public'
		}
	})
})

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./public/index.html', browserSync.reload)
	gulp.watch('./public/css/*.css', browserSync.reload);
	gulp.watch('./public/jss/*.js', browserSync.reload)
})

