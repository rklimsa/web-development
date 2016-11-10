var gulp = require('gulp');

var clean = require('gulp-clean');
var exec = require('gulp-exec');

gulp.task('clean', function() {
	return gulp.src('dist',{read : false}).pipe(clean())
});

gulp.task('build',function() {
	gulp.src(['app/**/*.ts','app/**/*.html']).pipe(gulp.dest('dist'));
});