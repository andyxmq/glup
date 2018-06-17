var gulp = require('gulp');
// var shelljs = require('shelljs');
var browserify = require("browserify");
var fs = require('fs');
var sequence = require('run-sequence');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gif = require('gulp-if');
var babel = require('gulp-babel');
var cleanClass = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var isProduction = process.env.ENV == true
// console.log(process.env);
gulp.task('default',function(){
    // console.log('this is default task');
    //shelljs.exec('browserify js/index.js -o js/main.js');
    // sequence('mainjs','watch');
    // sequence('vendorjs','mainjs');
    sequence('sass','sass-watch','minify-css',"minify-css-watch",'babel','babelWatch','mainjs');
});
gulp.task("mainjs",function(){
    //调用另外一个task
    var b= browserify({
        entries: ['build/js/index.js'],
        cache: {},
        packageCache: {},
        plugin: [watchify]
     });
     var bundle = function(){
        b
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gif(isProduction,uglify()))
        .pipe(gulp.dest("./js/"));
        // .pipe(fs.createWriteStream('js/main.js'));
     } 
     bundle();
     b.on('update',bundle);

})

gulp.task('babel',function(){
    gulp.src('./assets/js/*.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('./build/js/'))
});
gulp.task('babelWatch',function(){
    gulp.watch('./assets/js/*.js',function(){
        sequence('babel');
    });
});
gulp.task('minify-css',function(){
    gulp.src(['assets/css/bootstrap-theme.css','assets/css/bootstrap.css','assets/css/index.css'])
    .pipe(concat('main.css'))
    .pipe(cleanClass())
    .pipe(gulp.dest('build/css/'));
});
gulp.task('minify-css-watch',function(){
    gulp.watch('assets/css/*.css',['minify-css']);
});

gulp.task('sass',function(){
    gulp.src('assets/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});

gulp.task('sass-watch',function(){
    gulp.watch('assets/css/*.scss',['sass']);
});
// gulp.task('watch',function(){
//     gulp.watch(['assets/js/*.js'],function(){
//         sequence('mainjs');
//     });
// });
// gulp.task('vendorjs',function(){
//     var b = browserify().require('angular',{
//         expose: 'angular'
//     }).require('lodash',{
//         expose: 'lodash'
//     }).bundle().pipe(fs.createWriteStream('js/vendor.js'));
// });