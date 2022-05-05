"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

const argv = yargs.argv,
  production = !!argv.production;

gulp.task("views", () => {
  return (
    gulp
      .src(paths.views.src)
      .pipe(
        include({
          prefix: "@@",
          basepath: "@file",
        })
      )
      .pipe(webpHtmlNosvg())
      .pipe(gulpif(production, replace("../../../img/", "img/")))
      .pipe(gulpif(production, replace("../img/", "img/")))
      // .pipe(gulpif(production, replace(".css", ".min.css")))
      .pipe(gulpif(production, replace(".js", ".min.js")))
      .pipe(
        gulpif(
          production,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp-tasks/version.json",
            },
          })
        )
      )
      .pipe(gulp.dest(paths.views.dist))
      .pipe(browsersync.stream())
  );
});
