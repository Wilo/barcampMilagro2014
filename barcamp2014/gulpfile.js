/*
  Automatizar tareas con Gulp JS
*/
var gulp = require('gulp'),
    minimifyCss = require('gulp-minify-css')
    nib = require('nib'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch');

gulp.task('css', function(){
    gulp.src('static/css/*.css')
        .pipe(minimifyCss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('stylus', function(){
    gulp.src('static/styl/*.styl')
	.pipe(stylus({
	      use: nib(),
              compress: true
	     }))
    .pipe(gulp.dest('build/css'));

});

gulp.task('watch', function(){
    gulp.watch(['static/css/.*css'],['css']);
    gulp.watch(['static/styl/*.styl'], ['stylus']);
});

gulp.task('default', ['watch']);
