
const gulp = require('gulp');

gulp.task('anchor', function() {
  sources = [
    './node_modules/tiny-anchor/index.js'
  ];
  return gulp.src(sources).pipe(gulp.dest('./anchor'));
});

gulp.task('copy-anchor', gulp.series('anchor'));
