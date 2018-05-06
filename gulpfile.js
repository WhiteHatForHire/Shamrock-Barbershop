var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;


// compile sass
gulp.task('sass', function () {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/css'));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});