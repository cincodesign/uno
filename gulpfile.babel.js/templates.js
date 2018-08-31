import gulp from 'gulp';
import plumber from 'gulp-plumber';
import fileInclude from 'gulp-file-include';
import marked from 'marked';
import { source, build } from './paths';
import plumberConfig from './plumber';

const templates = () =>
  gulp
    .src(source.indexFiles)
    .pipe(plumber(plumberConfig))
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: source.includes,
        filters: {
          markdown: marked,
        },
      }),
    )
    .pipe(gulp.dest(build.dir));

export default templates
