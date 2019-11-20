const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");

const jsConfig = {
	src: [
		// Libraries in order!
		'src/javascript/jquery.js',
		'node_modules/nhsuk-frontend/dist/nhsuk.min.js',
		// Your own JS
		'src/javascript/app.js'
	],
	dest: './dist/javascript'
};

const js = () => gulp.src(jsConfig.src)
	.pipe(concat('app.js'))
	.pipe(rename('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(jsConfig.dest));


const scssConfig = {
	src: 'src/scss/app.scss',
	dest: 'dist/css'
};

const scss = () => gulp.src(scssConfig.src)
	.pipe(sass())
	.on("error", sass.logError)
	.pipe(cleanCss())
	.pipe(rename('app.min.css'))
	.pipe(gulp.dest(scssConfig.dest));


// Run JS and SCSS tasks as default
gulp.task('default', gulp.parallel(js, scss));
