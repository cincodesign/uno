# Uno
For making internet.

## What is Uno?
Uno is a static-site generator and boilerplate, built with [Gulp](http://gulpjs.com/). It comes with [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/) and [Babel](https://babeljs.io/) baked-in. It also includes a dev server, lightweight HTML templating, linter support, image compression, and more.


## Getting started
Uno requires:
  - [Node.js](https://nodejs.org/en/)
  - [Yarn](https://yarnpkg.com/en/) (you can also use `npm`)

Clone a new Uno, replacing `APP_NAME` with your own
```sh
$ git clone https://github.com/bitmap/uno.git APP_NAME
```

Once you've cloned or downloaded the source, you simply need to run `yarn install` in that directory. Running `yarn start` will start a local development server at `localhost:1337`. Your default browser should open automatically. That's it. That's really it.

## Scripts
Uno comes with a few built-in scripts out of the box. These are designed to streamline common workflows. You can run these scripts with either `yarn` or `npm`.

| Script                     | Description     |
| :------------------------- | :-------------  |
|`start`                | Begins a local dev server, which will watch your code for changes and trigger the various 'gulp' scripts to run. Your browser will automatically reload when it's finished.
|`test`                 | This will run [eslint](http://eslint.org/). Uno comes pre-configured with [AirBnb's style guide](https://github.com/airbnb/javascript) and [Prettier](https://github.com/prettier/prettier) extensions. It's recommended you install the eslint plugin in your [favorite text editor](https://github.com/AtomLinter/linter-eslint).
|`imgmin`               | This task will compress your `jpg`,`png`,`gif`, and `svg` files. It will squish a lot of bits out of your images, and this can have unintended consequences. It's left out of the main build scripts for a reason: use it wisely, and back up your stuff.
|`build`                | Before you hit the tubes, run `yarn build`. This'll minify your javascript and CSS and get everything tidy for production. All you need to do is throw your "build" folder up on the server and clock out. If you're using a service to deploy files, run this script on the server every time you push.

## Anything else?
Oh hell yeah. <a href="http://uno.cinco.io" target="blank">See the full documentation.</a>

## Built With Uno
We've been working on Uno for a while now, and it's out in the wild. All of these sites are built on top of various platforms (Craft, Drupal, Shopify, you name it) that started with Uno as a base.
- [Cinco Design](https://cincodesign.com)
- [Boa Technology](https://www.theboasystem.com/)
- [Nextbit](https://nextbit.com)
- [Prelude](https://www.preludefertility.com/)
- [Stellar.aero](https://www.stellar.aero/)
- [Beard Season](http://beardseason.com.au/)
- [Travis Hanour](http://www.travishanour.com/)
- [Austen Ezzell](http://www.austenezzell.com/)
