// Require
var gulp = require("gulp"),
	compass = require("gulp-compass"),
	ejs = require("gulp-ejs"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	server = require("gulp-server-livereload"),
	runSequence = require("run-sequence"),
	exec = require("child_process").exec;

// Filepath
var ejs_compile_files = ["./ejs/**/*.ejs", '!' + "./ejs/**/_*.ejs"],
	ejs_watch_files = "./ejs/**/*.ejs",
	sass_files = "./sass/**/*.scss",
	jekyll_source_files = "./jekyll_sources/**/*",
	markdown_files = "./markdown/**/*.md",
	image_files = "./image/**/*.{png,jpg,svg}",
	js_files = "./script/**/*.js",
	plugin_files = "./plugin/*.rb";

var exec_callback = function (err, stdout, stderr) {
	console.log(stdout);
	console.log(stderr);

	if (err) {
		notify.onError("Error! <%= err %>");
	}
};

gulp.task("default", ["build"]);
gulp.task("init", function () {
	exec("bundle install --path vendor/bundle", exec_callback);
	gulp.src("./node_modules/font-awesome/css/font-awesome.min.css")
		.pipe(gulp.dest("./jekyll_sources/css"));
	gulp.src("./node_modules/font-awesome/fonts/*")
		.pipe(gulp.dest("./jekyll_sources/fonts"));
	gulp.src("./node_modules/smooth-scroll/dist/js/smooth-scroll.min.js")
		.pipe(gulp.dest("./jekyll_sources/js"));
});
gulp.task("build", function () {
	runSequence("generate_sources", "jekyll");
});
gulp.task("test", function () {
	runSequence("generate_sources", "jekyll", function () {
		console.log("Starting jekyll watch.");
		exec("bundle exec jekyll build --watch", exec_callback);
		gulp.watch(ejs_watch_files, ["ejs"]);
		gulp.watch(sass_files, ["sass"]);
		gulp.watch(markdown_files, ["markdown"]);
		gulp.watch(image_files, ["image"]);
		gulp.watch(js_files, ["script"]);
		gulp.watch(plugin_files, ["plugin"]);
		gulp.src("./htdocs")
			.pipe(server({
			livereload: true,
			port: 8080,
			host: "0.0.0.0"
		}));
	});
});

gulp.task("jekyll", function () {
	exec("bundle exec jekyll build", exec_callback);
});


gulp.task("generate_sources", ["ejs", "markdown", "sass", "image", "script", "plugin"]);
gulp.task("plugin", function () {
	gulp.src(plugin_files)
		.pipe(gulp.dest("./jekyll_sources/_plugins"));
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
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(ejs())
		.pipe(gulp.dest("./jekyll_sources/_layouts"));
});
gulp.task("script", function () {
	gulp.src(js_files)
		.pipe(gulp.dest("./jekyll_sources/js"));
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