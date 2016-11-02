var gulp = require('gulp');

var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var childProcess = require('child_process');
var htmlToJs = require('gulp-html-js-template');

var distPath = './dist/';
var srcPath = './src/';
var tmpPath = './tmp/';

gulp.task('clean', ['clean_tmp','clean_dist'], function() {
});

gulp.task('clean_dist', function () {
    return gulp.src(distPath, {read: false})
        .pipe(clean());
});

gulp.task('clean_tmp', function () {
    return gulp.src(tmpPath, {read: false})
        .pipe(clean());
});

gulp.task('convert', function() {
	return gulp.src(srcPath + 'html/index.html').pipe(htmlToJs({
		ext:'js'
	})).pipe(gulp.dest(tmpPath + 'converted'))
});
 
gulp.task('concat', function() {
  return gulp.src([tmpPath + 'converted/*.js',srcPath + 'scripts/server/*.js'])
    .pipe(concat('all-plain.js'))
    .pipe(gulp.dest(tmpPath));
});

gulp.task('compress', function() {
	return gulp.src(tmpPath + 'all-plain.js')
		.pipe(minify({
			ext: {
				src:'-debug.js',
				min:'.js'		
			}
		})).pipe(gulp.dest(distPath))
});

gulp.task('build', ['clean','convert', 'concat', 'compress'], function() {
	console.log('build completed');
});

gulp.task('serve', function(cb) {
	gulp_server_start(cb);
});

var gulp_server_start = function(cb) {
	childProcess.exec('node ' + distPath + 'all-plain.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
	})
};