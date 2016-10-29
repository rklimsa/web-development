var gulp = require('gulp');

var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var childProcess = require('child_process');

var distPath = 'dist/';

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
	console.log('build completed');
});

gulp.task('server', function(cb) {
	gulp_server_start(cb);
});

var gulp_server_start = function(cb) {
	childProcess.exec('node ' + gulp + '/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
	})
};