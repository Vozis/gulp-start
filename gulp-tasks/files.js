"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";
import notify from "gulp-notify";
import plumber from "gulp-plumber";

const argv = yargs.argv,
  production = !!argv.production;

gulp.task("files", () => {
  return gulp
    .src(paths.files.src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: "Ошибка в FILES",
          message: "<%= error.message %>",
        }),
      })
    )
    .pipe(newer(paths.files.dist))
    .pipe(gulp.dest(paths.files.dist))
    .pipe(
      debug({
        title: "Files",
      })
    )
    .pipe(browsersync.stream());
});
