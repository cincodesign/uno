import gulp from 'gulp';
import plumber from 'gulp-plumber';
import fileInclude from 'gulp-file-include';
import marked from 'marked';
import paths from './paths';
import plumberConfig from './plumber';

module.exports = () =>
  gulp
    .src(paths.index)
    .pipe(plumber(plumberConfig))
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: paths.includes,
        filters: {
          markdown: marked,
        },
      }),
    )
    .pipe(gulp.dest(paths.build));
