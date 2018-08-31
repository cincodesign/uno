import gulp from 'gulp';
import gulpif from 'gulp-if';
import useref from 'gulp-useref';
import uglify from 'gulp-uglify';
import cssnano from 'gulp-cssnano';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import { build } from './paths';

const compress = () =>
  gulp
    .src(build.templates)
    .pipe(
      useref({
        searchPath: build.dir,
      }),
    )
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.js', rev()))
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulpif('*.css', rev()))
    .pipe(revReplace())
    .pipe(gulp.dest(build.dir));

export default compress
