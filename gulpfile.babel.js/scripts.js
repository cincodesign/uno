import gulp from 'gulp';
import notify from 'gulp-notify';
import browserify from 'browserify';
import stream from 'vinyl-source-stream';
import { source, build } from './paths';

const bundler = browserify({
  entries: source.scripts.main,
  extensions: ['.js'],
  debug: true,
}).transform('babelify', {
  presets: ['@babel/env'],
});

function handleError(err) {
  notify().write(err)
  this.emit('end');
}

const scripts = () =>
  bundler
    .bundle()
    .on('error', handleError)
    .pipe(stream('bundle.js'))
    .pipe(gulp.dest(build.scripts));

export default scripts
