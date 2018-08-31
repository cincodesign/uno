const src = 'source'
const dist = 'build'

const source = {
  dir: src,
  html: `${src}/html/**/*`,
  includes: `${src}/html/_includes`,
  styles: `${src}/styles/**/*.scss`,
  scripts: {
    all: `${src}/scripts/**/*.js`,
    main: `${src}/scripts/main.js`,
  },
  images: `${src}/assets/images/**/*`,
  docs: `${src}/docs/**/*`,
  data: `${src}/html/_data/**/*`,
  assets: `${src}/**/*.{ttf,woff,woff2,eof,svg,ico,png,jpg,gif,pdf}`,
  htaccess: `${src}/**/.htaccess`,

  get indexFiles() { return [`${this.html}.html`, `!${this.includes}{,/**}`]},
  get imageFiles() { return `${this.images}.{jpg,png,gif,svg}}` },
}

const build = {
  dir: dist,
  templates: `${dist}/**/*.html`,
  styles: `${dist}/styles`,
  scripts: `${dist}/scripts`,

  get all() { return `${this.dir}/*`},
  get maps() { return `${this.styles}/maps/`},
  get css() { return `${this.styles}/main.css`},
  get js() { return `${this.scripts}/bundle.js`}
}

export { source, build };
