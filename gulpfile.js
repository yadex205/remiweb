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
	sass_files = "./sass/**/*.scss",
	jekyll_source_files = "./jekyll_sources/**/*",
	markdown_files = "./markdown/**/*.md",
	image_files = "./image/**/*.{png,jpg,svg}";

gulp.task("default", ["build"]);
gulp.task("init", function () {
	gulp.src(".")
		.pipe(exec("bundle install --path vendor/bundle"))
		.pipe(exec.reporter());
	gulp.src("./node_modules/font-awesome/css/font-awesome.min.css")
		.pipe(gulp.dest("./jekyll_sources/css"));
	gulp.src("./node_modules/font-awesome/fonts/*")
		.pipe(gulp.dest("./jekyll_sources/fonts"));
});
gulp.task("build", ["markdown", "ejs", "sass", "image", "jekyll"]);
gulp.task("test", ["build"], function () {
	gulp.watch(ejs_watch_files, ["ejs"]);
	gulp.watch(sass_files, ["sass"]);
	gulp.watch(jekyll_source_files,["jekyll"]);
	gulp.src("./_site")
		.pipe(server({
			livereload: true,
			port: 8080,
			host: "0.0.0.0"
		}));
});

gulp.task("jekyll", function () {
	gulp.src(".")
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(exec("bundle exec jekyll build"))
		.pipe(exec.reporter());
});
gulp.task("markdown", function () {
	gulp.src(markdown_files)
		.pipe(gulp.dest("./jekyll_sources"));
});
gulp.task("image", function () {
	gulp.src(image_files)
		.pipe(gulp.dest("./jekyll_sources/image"));
});
gulp.task("ejs", function () {
	gulp.src(ejs_compile_files)
		.pipe(ejs())
		.pipe(gulp.dest("./jekyll_sources/_layouts"));
});
gulp.task("sass", function () {
	gulp.src(sass_files)
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(compass({
			config_file: "config.rb",
			sass: "sass",
			css: "jekyll_sources/css"
		}));
});