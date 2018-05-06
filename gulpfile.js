var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;

// watch files for changes and reload
// gulp.task('serve', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     }
//   });

//   gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
// });