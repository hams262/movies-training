// All variables
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// SASS & Autoprefixer tasks
gulp.task('sass', function () {
    return gulp.src('./project/css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

// HTML task
gulp.task('html', function () {
    return gulp.src('./project/*.html')
        .pipe(gulp.dest('./dist'));
});

// JS task
gulp.task('js', function () {
    return gulp.src('./project/js/*.js')
        .pipe(gulp.dest('./dist/js'));
});

// Watching all tasks
gulp.task('watch', function() {
    gulp.watch('project/css/*.scss', gulp.series('sass'));
    gulp.watch('project/*.html', gulp.series('html'));
    gulp.watch('project/js/*.js', gulp.series('js'));
});

// Select more than task as a default task
gulp.task('default', gulp.parallel('watch'));
