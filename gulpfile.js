// Require
var gulp = require("gulp"),
	compass = require("gulp-compass"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	exec = require("child_process").exec;

// Filepath
var sass_files = "./sass/**/*.scss";

gulp.task("default");
gulp.task("build", ["sass"]);
gulp.task("test", ["build"], function () {
	exec("bundle exec jekyll serve", function(error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		if (error !== null) {
			notify.onError("Error: <%= error %>");
		}
	});
	gulp.watch(sass_files, ["sass"]);
});
gulp.task("init", function () {
	exec("bundle install --path vendor/bundle");
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
		}));
});