var gulp     = require('gulp'),
    cssnano  = require('gulp-cssnano'),
    rename   = require('gulp-rename');
    autoprefixer = require('gulp-autoprefixer')


gulp.task('css', function() {
    return gulp.src('app/css/style.css')
    .pipe(autoprefixer(['last 15 version'], { cascade:true }))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});