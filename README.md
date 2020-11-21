
# Tiny Anchor

## Version

`0.0.2`

## About

This project is designed to provide navigation tools to minimize footprint (browser history).

## Installation

`npm install tiny-anchor`

## Usage

### Demonstration

* Code [HERE](https://github.com/bob-fornal/tiny-anchor-demo)
* Live [HERE](https://tiny-anchor.web.app/)

### Using the Files

Using a `gulpfile.js`, the `index.js` and `escape.css` can be moved to an appropriate location.

```javascript
const gulp = require('gulp');

gulp.task('anchor', function() {
  sources = [
    './node_modules/tiny-anchor/index.js'
  ];
  return gulp.src(sources).pipe(gulp.dest('./anchor'));
});

gulp.task('copy-anchor', gulp.series('anchor'));
```

### Hiding Navigation

The navigation code included should be accompanied by a description similar to the following:

> This site was made with your safety in mind. The browser history will only show one link to
  this site. If a link is followed off this site, there will be nothing in the history to show
  you were here.

The navigation should be used like this ...

```html
<html>
  <head>
    <!-- -->
    <script src="./anchor/index.js"></script>
    <!-- -->
  </head>
  <body>
    <!-- -->
    <a href="#" onclick="anchor.navigate(event, 'index.html')">Home</a>
    <a href="#" onclick="anchor.navigate(event, `http://www.google.com`)">Off-Site</a>
    <!-- -->
  </body>
</html>
```
