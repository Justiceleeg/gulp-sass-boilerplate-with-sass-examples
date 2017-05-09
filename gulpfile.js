const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel')

const paths = {
    jsSource: ['public/app.js','public/**/**.js'],
    sassSource: ['public/styles/**/*.*']
}

gulp.task('sass', function(){
    gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('es6', function(){
    gulp.src(paths.jsSource)
    .pipe(babel({ 
        presets: ['es2015'] 
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build',['es6','sass']);

gulp.task('watch', function(){
    gulp.watch(paths.jsSource, ['es6']);
    gulp.watch(paths.sassSource, ['sass']);
})

gulp.task('default', ['build', 'watch']); 

