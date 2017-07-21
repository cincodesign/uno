import gulp from 'gulp';
import notify from 'gulp-notify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import paths from './paths';

const bundler = browserify({
  entries: paths.scripts.app,
  extensions: ['.js'],
  debug: true,
}).transform('babelify', {
  presets: ['es2015'],
});

function handleError(err) {
  notify().write(err);
  this.emit('end');
}

module.exports = () =>
  bundler
    .bundle()
    .on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(`${paths.build}/scripts`));
