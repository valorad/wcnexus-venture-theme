const gulp = require('gulp');
const pump = require('pump');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssimport = require("gulp-cssimport");
const webpack = require('webpack-stream');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const lr = require('tiny-lr');

const devServer = lr();

const clientPath = 'src';

gulp.task('clean', async (done) => {

  await del([`dist/**`]);
  done();
  
});

gulp.task('compile:css', (done) => {

  let postCSSPlugins = [
    autoprefixer({browsers: ['last 3 version']}),
    cssnano()
  ];

  pump(
    [
      gulp.src(`${clientPath}/assets/scss/**/*.scss`),
      sourcemaps.init(),
      sass().on('error', sass.logError),
      postcss(postCSSPlugins),
      sourcemaps.write(`.`),
      gulp.dest(`dist/static/css/`),
    ], done
  )

});

gulp.task('compile:ts', (done) => {

  pump(
    [
      // no gulp.src here. It's been specified in config file.
      webpack(
        require('./webpack/w.c.script'),
        require("webpack") // <- a work around 'cuz currently webpack 4 is unsupported by webpack-stream
      ),
      
      gulp.dest('dist/static/js/')
    ], done
  );

});


gulp.task('minify:images', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/static/images/**`),
      imagemin(),
      gulp.dest(`dist/static/images/`)
    ], done
  );

});


// copy section -->

gulp.task('copy:archetypes', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/archetypes/**`),
      gulp.dest(`dist/archetypes/`)
    ], done
  );

});

gulp.task('copy:i18n', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/i18n/**`),
      gulp.dest(`dist/i18n/`)
    ], done
  );

});

gulp.task('copy:layouts', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/layouts/**/*.html`),
      gulp.dest(`dist/layouts/`)
    ], done
  );

});

gulp.task('copy:static', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/static/css/**/*.css`),
      gulp.dest(`dist/static/css/`)
    ]
  );

  pump(
    [
      gulp.src(`${clientPath}/static/fonts/**`),
      gulp.dest(`dist/static/fonts/`)
    ], done
  );

});

gulp.task('copy:misc', (done) => {

  pump(
    [
      gulp.src(`${clientPath}/theme.toml`),
      gulp.dest(`dist/`)
    ]
  );

  pump(
    [
      gulp.src(`LICENSE`),
      gulp.dest(`dist/`)
    ]
  );

  pump(
    [
      gulp.src(`README.md`),
      gulp.dest(`dist/`)
    ], done
  );

});

// <-- copy section



gulp.task('watch', () => {

  devServer.listen(51905, (err) => {
    if (err) {
      return console.error(err);
    };

    // Watch .scss files
    gulp.watch(`${clientPath}/assets/scss/**/*.scss`, gulp.parallel('compile:css'));

    // Watch .js files
    gulp.watch([`${clientPath}/assets/ts/**/*.ts`, `!${clientPath}/assets/ts/**/*.d.ts`], gulp.parallel('compile:ts'));

    // Watch image files
    gulp.watch([`${clientPath}/static/images/**`], gulp.parallel('minify:images'));

  });

});

// subtasks -->
gulp.task("copy", gulp.parallel(

  'copy:archetypes',
  'copy:i18n',
  'copy:static',
  'copy:layouts',
  'copy:misc'

));

// <-- subtasks


gulp.task("default", gulp.series(
  'clean',
  'compile:css',
  'compile:ts',
  'minify:images',
  'copy'
));

gulp.task("serve", gulp.series(
  'clean',
  'compile:css',
  'compile:ts',
  'minify:images',
  'copy',
  'watch'
));

