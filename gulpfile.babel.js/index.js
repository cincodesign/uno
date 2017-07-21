import gulp from 'gulp';
import del from 'del';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import paths from './paths';
import art from './art';

// Import tasks
import html from './html';
import styles from './styles';
import bundle from './bundle';
import copyfiles from './copyfiles';
import useref from './useref';
import serve from './serve';
import imgmin from './imgmin';

gulp.task('clean', () => del([`${paths.build}/*`]));
gulp.task('html', () => html());
gulp.task('styles', () => styles());
gulp.task('bundle', () => bundle());
gulp.task('copyfiles', () => copyfiles());
gulp.task('imgmin', () => imgmin());
gulp.task('serve', ['watch'], () => serve());
gulp.task('useref', () => useref());
gulp.task('finale', () => {
  del([
    `${paths.build}/styles/maps/`,
    `${paths.build}/styles/app.css`,
    `${paths.build}/scripts/bundle.js`,
  ]);
  console.log(art.build);
});
gulp.task('watch', () => {
  gulp.watch([paths.html, paths.docs, paths.data], ['html', browserSync.reload]);
  gulp.watch(paths.styles, ['styles', browserSync.reload]);
  gulp.watch(paths.scripts.all, ['bundle', browserSync.reload]);
  gulp.watch(paths.images, ['copyfiles', browserSync.reload]);
});

const buildTasks = ['html', 'styles', 'bundle', 'copyfiles'];

// Development
gulp.task('default', ['clean'], () => {
  runSequence(buildTasks, 'serve');
});

// Deployment
gulp.task('build', ['clean'], () => {
  runSequence(buildTasks, 'useref', 'finale');
});

console.log(art.splash);
