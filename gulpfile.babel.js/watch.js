import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from './paths';

module.exports = () => {
  gulp.watch([paths.html, paths.docs, paths.data], gulp.parallel('html', browserSync.reload));
  gulp.watch(paths.styles, gulp.parallel('styles', browserSync.reload));
  gulp.watch(paths.scripts.all, gulp.parallel('bundle', browserSync.reload));
  gulp.watch(paths.images, gulp.parallel('copyfiles', browserSync.reload));
}
