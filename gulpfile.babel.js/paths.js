const source = 'source';
const build = 'build';

const paths = {
  source,
  build,
  html: `${source}/html/**/*`,
  includes: `${source}/html/_includes/`,
  styles: `${source}/styles/**/*.scss`,
  scripts: {
    all: `${source}/scripts/**/*.js`,
    app: `${source}/scripts/app.js`,
  },
  images: `${source}/assets/images/**/*`,
  index: [`${source}/html/**/*.html`, `!${source}/html/_includes{,/**}`],
  docs: `${source}/docs/**/*`,
  data: `${source}/html/_data/**/*`,
};

export default paths;
