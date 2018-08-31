import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import pixrem from 'pixrem';
import mqpacker from 'css-mqpacker';
import { source, build } from './paths';
import plumberConfig from './plumber';

const processors = [
  autoprefixer({
    browsers: ['last 2 versions'],
  }),
  mqpacker({
    sort: true,
  }),
  pixrem,
];

const styles = () =>
  gulp
    .src(source.styles)
    .pipe(plumber(plumberConfig))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules/'],
      }),
    )
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(build.styles));

export default styles
