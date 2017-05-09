const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel')

const paths = {
    jsSource: ['public/app.js','public/**/**.js'],
    sassSource: ['public/**/*.sass'],
    cssSource: ['public/styles/**.css']
}

gulp.task('js', function(){
    gulp.src(paths.jsSource)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', function(){
    gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', function(){
    gulp.src(paths.cssSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build',['js','sass', 'css']);

gulp.task('watch', function(){
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.cssSource, ['css']);
})

gulp.task('default', ['build', 'watch']); 

