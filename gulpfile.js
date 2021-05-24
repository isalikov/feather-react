const gulp = require('gulp')

const babel = require('gulp-babel')
const replace = require('gulp-replace')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

const babelConfig = require('./babel.config')

const source = ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.test.ts', '!src/**/*.story.tsx', '!src/**/*.d.ts']

const buildJS = () =>
    gulp
        .src(source)
        .pipe(babel({ presets: babelConfig.presets }))
        .pipe(replace('require("./style.styl");', ''))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))

const buildDts = () =>
    gulp
        .src('src/**/*.d.ts')
        .pipe(rename((p) => (p.basename = 'index.d')))
        .pipe(gulp.dest('dist'))

exports.dist = gulp.series(buildJS, buildDts)
