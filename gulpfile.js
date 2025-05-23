"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass")(require("sass")); // Подключаем gulp-sass и sass

const dist = "./dist/";
// const dist = 'c:/MAMP/htdocs/dist'

gulp.task("copy-html", () => {
    return gulp.src("./src/*.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                    }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

// Задача для компиляции Sass в CSS
gulp.task("sass", () => {
    return gulp.src("./src/scss/**/*.scss") // Указываем путь к вашим .scss файлам
        .pipe(sass().on("error", sass.logError)) // Компилируем Sass в CSS
        .pipe(gulp.dest(dist + "css")) // Сохраняем результат в папку dist/css
        .pipe(browsersync.stream()); // Обновляем браузер
});

gulp.task("watch", () => {
    browsersync.init({
        server: {
            baseDir: "./dist/",
            serveStaticOptions: {
                extensions: ["html"]
            }
        },
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/*.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass")); // Добавляем слежение за .scss файлами
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js", "sass"));

gulp.task("default", gulp.parallel("watch", "build"));
