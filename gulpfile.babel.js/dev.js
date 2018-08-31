import gulp from 'gulp';
import browserSync from 'browser-sync';
import chalk from 'chalk';
import { source, build } from './paths';

import { templates, styles, scripts, copyfiles } from './tasks'

function serve() {
 return  browserSync({
    server: {
      baseDir: build.dir,
    },
    port: 1337,
    notify: false,
    ghostMode: false,
    ui: false,
  });
}

function reload(done) {
  browserSync.reload()
  done()
}

function watcher(files, ...task) {
  const watch = gulp.watch(files, gulp.parallel(task, reload));

  watch.on('change', (path) => {
    console.log(`${chalk.yellow(path)} was ${chalk.green('changed')}`);
  });

  watch.on('unlink', (path) => {
    console.log(`${chalk.yellow(path)} was ${chalk.red('removed')}`);
  });

  return watch
}

const watch = () => {
  watcher([source.html, source.docs, source.data], templates);
  watcher(source.styles, styles);
  watcher(source.scripts.main, scripts);
  watcher(source.images, copyfiles);
}

export {serve, watch}
