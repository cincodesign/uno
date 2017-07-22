# What's in the box
---
There are _a lot_ of front-end tools in here. `gulp` and its numerous plug-ins, `browserify` with `babelify` that transpiles ES6 into code your browser can read, `sass` sprinkled with `postcss`. I'd be happy to explain how this all works over coffee, but for brevity's sake I'm gonna just hit the stuff that's going to get you rolling.

## HTML
---
The main HTML file is `source/html/index.html`.

There's really lightweight templating built in utilizing [gulp-file-include](https://www.npmjs.com/package/gulp-file-include). By default it looks in the `source/html/_includes` directory. You can include any type file and it will spit out its contents:

Example: `@@include('path/file.html')` or `@@include('path/logo.svg')`

This handy plugin will also parse markdown files to HTML:

`@@include(markdown('path/file.md'))`.

gulp-file-include has a bunch of great features, like `@@for` loops, and `@@if` conditionals, plus it even lets you loop over `JSON` data for advanced templating. It's best to [read up on what it can do](https://www.npmjs.com/package/gulp-file-include).

## CSS
---
The entry file for you app's styles is `source/styles/app.scss`. CSS files get compiled from Sass.

### Architecture
Your site's CSS contains a `config` file where you define site-wide globals. This lone file should be filled with variables that your entire site uses; things like colors, fonts, or transition timing. While there are many philosophies on CSS organization, we prefer to break stuff up into 5 sections: 'lib', 'core', 'components', 'sections' and 'pages'.

- <strong>Lib</strong> – Lib contains some dependencies your app needs like mixins and functions, and top-level stuff like animation keyframes. It's also where the `:root` is located. It's a good idea to put anything here that might break if it goes missing.

- <strong>Core</strong> – Core contains your base application selectors, naked stuff like `body`, `p`, or `a` tags. Really low-level stuff like basic typography selectors should go in here. The `helpers` file contains utility selectors.

- <strong>Components</strong> – This is the meat of your app. Things like alerts, buttons, forms, headers, blockquote, you know. Any piece that is going to be very common and reusable.

- <strong>Sections</strong> – This folder contains app sections. These might be global, like the header or footer, or appear on one or two pages, like a contact form. These typically make liberal use of components, but aren't quite as granular.

- <strong>Pages</strong> – And finally, page specific CSS gets thrown into here.

### Based.css Framework
Uno comes with the [Based.css](https://github.com/bitmap/based.css) framework to jump start your site.

You can [read the full documentation here](http://cabe.io/based.css).

Uno is extending Based a little bit. By default it imports the source and exposes some variables to configure, like grid sizing or spacing. These can be tweaked in the `based` file in `source/styles`.

Of course, you're not forced to use this framework. You can straight up delete it and reassign the variable names if you want to start super fresh. Uno's `app.scss` file will resolve paths from `node_modules`, so feel free to remove the dependency and use Bootstrap or Foundation or whatever you like.

### Sass Utilities
Uno comes with a few cool [utilities](#uno-sass-utils) that make stylin' a little easier. You're welcome to extend them our pull in your favorite mixin library, like Bourban.

### Postcss
On build, your styles takes a quick trip through [postcss](https://github.com/postcss/postcss) to automate some gotchas. We run [autoprefixer](https://www.npmjs.com/package/autoprefixer) so you can forgo writing vendor prefixes, [pixrem](https://www.npmjs.com/package/pixrem) to convert `rem` units to `px` as a fallback, and [mqpacker](https://www.npmjs.com/package/css-mqpacker) to organize your media queries so you don't have to worry about duplicate queries causing cascading issues.

## JavaScript
---
The main JS file is `source/scripts/app.js`.

We've baked in ES6 support (using [Babel](http://babeljs.com/)). ES6 JavaScript gets transpiled into browser-readable code. [Read up on ES6 syntax and features](https://babeljs.io/learn-es2015/).

You also have the ability to import modules and libraries (like jQuery) from `npm` instead of manually managing files yourself.

- Install modules from npm in the command line: `yarn add jquery`. This install the script as a dependency.
- Import these dependencies at the top of your JS files: `import $ from 'jquery'`
- PLUS, you can import your own scripts: `import component from './path/to/file'`

The `app.js` file contains a super basic example.

### I don't like things the way they are...
Hell, neither do I, but this is a good start. You can easily add more advanced templating like EJS, Jade, or Mustache, replace Based.css with Bootstrap, wire it up to use CoffeeScript if that's your thing, or create your own scripts.
