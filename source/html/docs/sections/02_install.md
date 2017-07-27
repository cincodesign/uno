## Getting started
---
Uno requires:
  - [Node.js](https://nodejs.org/en/)
  - [Yarn](https://yarnpkg.com/en/) (you can also use `npm`)

Clone a new Uno, replacing `APP_NAME` with your own
```sh
$ git clone https://github.com/cincodesign/uno.git APP_NAME
```

Once you've cloned or downloaded the source, you simply need to run `yarn install` in that directory. Running `yarn start` will start a local development server at `localhost:1337`. Your default browser should open automatically. That's it. That's really it.

## Scripts
---
Uno comes with a few built-in scripts out of the box. These are designed to streamline common workflows.

| Script&nbsp;Name                     | Description     |
| :------------------------- | :-------------  |
|`yarn start`                | Begins a local dev server, which will watch your code for changes and trigger the various 'gulp' scripts to run. Your browser will automatically reload when it's finished.
|`yarn test`                 | This will run [eslint](http://eslint.org/) and [sass-lint](https://github.com/sasstools/sass-lint). Uno comes pre-configured with [AirBnb's style guide](https://github.com/airbnb/javascript) for JS and [Prettier](https://github.com/prettier/prettier) extensions. It's recommended you install a linter plugin in your [favorite text editor](https://github.com/AtomLinter/linter-eslint).
|`yarn imgmin`               | This task will compress your `jpg`,`png`,`gif`, and `svg` files. It will squish a lot of bits out of your images, and this can have unintended consequences. It's left out of the main build scripts for a reason: use it wisely, and back up your stuff.
|`yarn build`                | Before you hit the tubes, run `yarn build`. This'll minify your javascript and CSS and get everything tidy for production. All you need to do is throw your "build" folder up on the server and clock out. If you're using a service to deploy files, run this script on the server every time you push.

### Custom Tasks
These scripts are just the tip of the iceberg. You can edit and extend these scripts yourself. We use [Gulp](http://gulpjs.com) for its simplicity and community support.

The `gulpfile.babel.js` directory houses all the gulp tasks, which are imported and referenced in that directory's `index.js` file. If you need to run any individual task, you'll need to install `gulp` globally via `npm install -g gulp`. Now you can run individual tasks like `gulp styles` or `gulp copyfiles` for debugging.
