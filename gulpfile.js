const gulp = require('gulp');
const concat = require('gulp-concat');
const scss = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const jsFiles = [
  './js/modal.js',
  './js/video.js'
];

// Объединяем скрипты
function scripts() {
  return gulp.src(jsFiles)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

// Минифицируем и переименовываем css
function compileScss() {
  return gulp.src('./style/style.scss')
    .pipe(scss())
    .pipe(cleanCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function clean() {
  return del(['build/*'])
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./style/**/*.scss', compileScss)
  gulp.watch('./js/**/*.js', scripts)
  gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('scripts', scripts);
gulp.task('compileScss', compileScss);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(scripts,compileScss)));

gulp.task('dev', gulp.series('build','watch'));
