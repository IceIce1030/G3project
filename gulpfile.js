var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    uglify     = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    rename     = require("gulp-rename"),
    gulp = require('gulp'),
    gulpImagemin = require('gulp-imagemin'),
    htmlreplace = require('gulp-html-replace'),
  	minifyHTML  = require('gulp-minify-html'),
    sass = require('gulp-sass'),
  	compass   = require('gulp-compass');


//-------------------------
//把CSS檔案合併成一個all.css
 gulp.task('concat', function() {
    return gulp.src('build/css/*.css')
        .pipe(concat('all.css'))
         .pipe(gulp.dest('build/css/'));
 });
 //--------
//把合併過的all.css壓縮成all.min.css
gulp.task('minify-css',['concat'], function() {
    return gulp.src('build/css/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('build/css/'));
});
//-----------------------
//把js檔案壓縮

gulp.task('uglify', function() {
    return gulp.src('build/js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('build/js/'));
});


//---------------------


//watch 監看index

gulp.task('webserver', function() {
    gulp.src('project/')
        .pipe(webserver({
            port: 1234,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});


//----------------------
//壓縮圖片
gulp.task('image', function () {
    gulp.src('origin/images/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('images'));
});


//--------------------------------
//壓縮HTML 會把 合併並壓縮過的CSS 和JS 直接帶入取代
gulp.task('html-replace',function() {
  var opts = {comments:false,spare:false,quotes:true};
  return gulp.src('binbin/html/*.html')
    .pipe(htmlreplace({
        'css': 'build/css/all.min.css',
        'js': 'build/js/javescript.min.js'
    }))  
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('binbin/build/html'));
});

// gulp.task('htmlReplace', ['html-replace','minify-css', 'uglify']);
//---------------------------
//---------------------------
//sass
// gulp.task('compass',function(){
//     return gulp.src('project/style/scss/*.scss')
//         .pipe(compass({
//             config_file: 'project/style/scss/config.rb',
//             sourcemap: true,
//             time: true,
//       css: 'project/style/css/',
//       sass: 'project/style/scss/',
//       style: 'compact' //nested, expanded, compact, compressed
//         }))
//         .pipe(gulp.dest('project/style/css/'));
// }); 


gulp.task('sass', function () {
  return gulp.src('project/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('project/css/'));
});

gulp.task('watch',function(){
    gulp.watch('project/sass/*.scss',['sass']);
});

gulp.task('default', ['watch','webserver']);
//---------------------------


//cmd 指令
 //gulp.task('default',['minify-css','uglify','webserver','image']);

