# Uno Sass Utils
---

Uno comes with a few Sass mixins and functions built-in.

## Mixins
---

### breakpoint
`@include breakpoint([sm,md,lg,xl]) { ... }`

When you need to make components or sections responsive, use the `breakpoint()` mixin. This mixin only accepts a breakpoint defined in `src/scss/uno/_config.scss` to insure consistency. If you need to specify a custom value, use a basic `@media` query. Out-of-the-box, Uno will consolidate all of your media queries with [css-mqpacker](https://www.npmjs.com/package/css-mqpacker) on build.


### maintain-aspect-ratio
`@include maintain-aspect-ratio (16, 9);`

This will force a component to maintain a certain aspect ratio, useful for embeded videos and stuff. Simply pass it two values like `16, 9` or `4, 3`

### font-size
`@include font-size ([base,h1,h2,h3,h4,h5,sm]);`

This ensures you use consistent font sizes throughout your site.

## Functions
---

### rem-calc
`rem-calc(16px)`

This will convert pixel values to `rem` because we're fancy. By default, 1rem = 16px, and things will scale with the `$font-size` variable in your config.

### strip-unit
`strip-unit($value)`

This will strip the unit (px, em, vh, etc) from the value and return a plain number.
