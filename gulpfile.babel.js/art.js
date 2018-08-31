import fs from 'fs';
import chalk from 'chalk';
import { build } from './paths';

const gradient = require('gradient-string');


const npm = JSON.parse(fs.readFileSync('./package.json'));

const art = {
  splash: `
  x8h.     x8.
  :88888> .x8888x.   u.    u.          u.
   '8888   '8888f  x@88k u@88c.  ...ue888b
    8888    8888' ^"8888""8888"  888R  Y888r
    8888    8888    8888  888R   888R  I888>
    8888    8888    8888  888R   888R  I888>
    8888    8888    8888  888R   888R  I888>
    8888    8888    8888  888R   u888  J888
  -n88888x>"88888x "*88*" 8888"   "*888*P"
    '%888"  4888!'   ""   'Y"       'Y"
      '"      ""`,
  info: `
    Version ${chalk.yellow(npm.version)}
    ${npm.description}.
    By ${npm.author}
  `,
  finish: `
    😎  ${chalk.green('Success!')}
    Your static assets are in the '${chalk.cyan(build.dir)}' directory.
  `,
};

export function splash() {
  console.log(gradient('#333eed', '#ed333e')(art.splash));
  console.log(art.info);
}

export function finish() {
  console.log(art.finish);
}
