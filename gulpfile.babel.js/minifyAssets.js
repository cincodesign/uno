import gulp from 'gulp';
import imgmin from 'gulp-imagemin';
import { source } from './paths';

const minifyAssets = () =>
  gulp.src(source.imageFiles).pipe(imgmin()).pipe(
    gulp.dest(`${source.dir}/assets/images`, {
      overwrite: true,
    }),
  );

export default minifyAssets
