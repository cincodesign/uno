import gulp from 'gulp';
import imgmin from 'gulp-imagemin';
import paths from './paths';

module.exports = () =>
  gulp.src(`${paths.images}.{jpg,png,gif,svg}`).pipe(imgmin()).pipe(
    gulp.dest(`${paths.source}/assets/images`, {
      overwrite: true,
    }),
  );
