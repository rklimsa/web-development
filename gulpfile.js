var gulp = require('gulp');

var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var childProcess = require('child_process');

gulp.task('init', function () { console.log('Init'); });

gulp.task('compress', function() {
	gulp.src('src/*.js')
		.pipe(minify({
			ext: {
				src:'-debug.js',
				min:'.js'
			
			}
		})).pipe(gulp.dest('dist'))
});
  
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', ['clean','compress'], function() {
	console.log('build-task');
});

gulp.task('server', function(cb) {
	childProcess.exec('node src/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
	})
});