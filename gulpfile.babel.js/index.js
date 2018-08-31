import gulp from 'gulp';
import del from 'del';
import { build } from './paths';
import { splash, finish } from './art';
import { serve, watch } from './dev';
import {
  templates,
  styles,
  scripts,
  copyfiles,
  compress,
  minifyAssets,
} from './tasks';

// Tasks
// Cleanup tasks
const { all, maps, css, js } = build
const clean = () => del([all]);
const wrapup = () => del([maps, css, js]).then(() => finish());

// Dev (npm start)
const tasks = [clean, templates, styles, scripts, copyfiles]
gulp.task('default', gulp.series(tasks, gulp.parallel(serve, watch)));

// Production (npm run build)
const production = [...tasks, compress, wrapup]
gulp.task('build', gulp.series(production));

// Minify images (npm run imgmin)
gulp.task('imgmin', minifyAssets);

splash()
