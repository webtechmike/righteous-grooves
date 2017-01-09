var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps')
  concat = require('gulp-concat')
  imagemin = require('gulp-imagemin');

gulp.task('default', ['watch']);

gulp.task('images', function(){
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
});

gulp.task('build-css', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
});

gulp.task('jshint', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/**/*.js', ['jshint']);
  gulp.watch('src/scss/**/*.scss', ['build-css']);
});

gulp.task('build', ['images','build-css', 'build-js']);
