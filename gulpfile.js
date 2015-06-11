// Require
var gulp = require("gulp"),
	compass = require("gulp-compass"),
	ejs = require("gulp-ejs"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	server = require("gulp-server-livereload"),
	exec = require("gulp-exec");

// Filepath
var ejs_compile_files = ["./ejs/**/*.ejs", '!' + "./ejs/**/_*.ejs"],
	ejs_watch_files = "./ejs/**/*.ejs",
	sass_files = "./sass/**/*.scss";

gulp.task("default", ["build"]);
gulp.task("init", function () {
	exec("bundle install --path vendor/bundle");
});
gulp.task("build", ["ejs", "sass"]);
gulp.task("test", ["build"], function () {
	gulp.watch(ejs_watch_files, ["ejs"]);
	gulp.watch(sass_files, ["sass"]);
	gulp.src("./_site")
		.pipe(server({
			livereload: true,
			port: 8080,
			host: "localhost"
		}));
});


gulp.task("ejs", function () {
	gulp.src(ejs_compile_files)
		.pipe(ejs())
		.pipe(gulp.dest("./_layouts"));
});
gulp.task("sass", function () {
	gulp.src(sass_files)
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(compass({
			config_file: "config.rb",
			sass: "sass",
			css: "css"
		}))
		.pipe(exec("bundle exec jekyll build"))
		.pipe(exec.reporter());
});