'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require ('gulp-imagemin');

sass.compiler = require('node-sass');




gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);


