import gulp from 'gulp';
import del from 'del';
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
import watch from './watch';

const cleanTask = () => del([`${paths.build}/*`]);
const htmlTask = () => html();
const styleTask = () => styles();
const bundleTask = () => bundle();
const copyTask = () => copyfiles();
const imgminTask = () => imgmin();
const serveTask = () => serve();
const watchTask = () => watch();
const cleanBuild = () => del([
  `${paths.build}/styles/maps/`,
  `${paths.build}/styles/app.css`,
  `${paths.build}/scripts/bundle.js`,
]);

const finale = () => { console.log(art.build); }

gulp.task('clean', cleanTask);
gulp.task('html', htmlTask);
gulp.task('styles', styleTask);
gulp.task('bundle', bundleTask);
gulp.task('copyfiles', copyTask);
gulp.task('imgmin', imgminTask);
gulp.task('useref', useref);
gulp.task('cleanBuild', cleanBuild);
gulp.task('watch', watchTask);
gulp.task('serve', serveTask);
gulp.task('finale', finale);

function development() {
  return gulp.series('clean', 'html', 'styles', 'bundle', 'copyfiles', 'serve');
}

function production() {
  return gulp.series('clean', 'html', 'styles', 'bundle', 'copyfiles', 'useref', 'cleanBuild');
}

// Development
gulp.task('default', development());

// Deployment
gulp.task('build', production());

console.log(art.splash);
