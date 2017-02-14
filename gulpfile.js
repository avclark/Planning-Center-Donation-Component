var gulp = require('gulp');
var sass = require('gulp-sass');
var $    = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src('assets/source/sass/app.sass')
    .pipe($.sass({
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
  return gulp.src('assets/source/js/**/*.js')
  .pipe(gulp.dest('assets/js'))
});

gulp.task('default', ['sass', 'js'], function() {
  gulp.watch(['assets/source/sass/**/*.sass'], ['sass']);
  gulp.watch('assets/source/js/**/*.js'); 
});
