"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var rigger = require('gulp-rigger');
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var wait = require("gulp-wait");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
//var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");
// var pump = require('pump');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');



gulp.task("serve", ["style","html", "js"], function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("app/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("app/*.html", ["html"]).on("change", server.reload);
  gulp.watch("app/js/*.js", ["js"]).on("change", server.reload);
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "app/fonts/**/*.{woff,woff2}",
    "app/img/**/*",
    "app/js/**"
  ], {
      base: "app"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("style", function () {
  gulp.src("app/sass/style.scss")
    .pipe(plumber())
    .pipe(wait(300))
    .pipe(sass({
      includePaths: require("node-normalize-scss").includePaths
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  gulp.src(["node_modules/headroom.js/dist/headroom.js", "app/js/headroom.js", "app/js/picturefill.js", "app/js/svgxuse.js", "app/js/tiny-slider.js", "app/js/slider.js", "app/js/scrollto.js", "app/js/portfolio.js", "app/js/script.js", "app/js/map.js"])
  .pipe(concat("script.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest("build/js"))
});

// gulp.task("sprite", function () {
//   return gulp.src("app/img/.{svg}")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"));
// });

gulp.task("images", function () {
  return gulp.src("build/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))

    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("build/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("app/*.html")
    .pipe(rigger())
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "js",
    "images",
    // "sprite",
    "webp",
    "html",
    done
  );
});
