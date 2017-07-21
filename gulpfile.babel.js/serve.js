import browserSync from 'browser-sync';
import paths from './paths';

module.exports = () =>
  browserSync({
    server: {
      baseDir: paths.build,
    },
    port: 1337,
    notify: false,
    ghostMode: false,
    ui: false,
  });
