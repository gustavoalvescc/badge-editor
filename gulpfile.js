var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
  });

  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    // Other watchers
  })