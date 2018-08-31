import gulp from 'gulp';
// import notify from 'gulp-notify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import paths from './paths';

const bundler = browserify({
  entries: paths.scripts.app,
  extensions: ['.js'],
  debug: true,
}).transform('babelify', {
  presets: ['@babel/env'],
});

function handleError(err) {
  console.log(err)
  this.emit('end');
}

module.exports = () =>
  bundler
    .bundle()
    .on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(`${paths.build}/scripts`));
