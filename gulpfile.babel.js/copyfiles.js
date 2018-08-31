import gulp from 'gulp';
import { source, build } from './paths';

const copyfiles = () =>
  gulp
    .src([
      source.assets,
      source.htaccess,
    ])
    .pipe(gulp.dest(build.dir));

export default copyfiles
