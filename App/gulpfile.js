const { src, dest, parallel } = require("gulp");
const autoprefix = require("gulp-autoprefixer");
const minifyCSS = require("gulp-csso");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const jsonminify = require("gulp-jsonminify");
const minify = require("gulp-minify");

function js() {
  return src("src/client/js/*.js", { sourcemaps: false })
    .pipe(concat("app.js"))
    .pipe(minify())
    .pipe(dest("src/build/js", { sourcemaps: false }));
}

function css() {
  return src("src/client/css/main.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("src/build/css"));
}

function json() {
  return src("src/client/json/scores.json")
    .pipe(jsonminify())
    .pipe(dest("src/build/json"));
}

exports.js = js;
exports.css = css;
exports.json = json;

exports.default = parallel(js, css, json);
