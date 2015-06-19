var gulp = require("gulp"),
	gexec = require("gulp-exec"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	server = require("gulp-server-livereload"),
	exec = require("child_process").exec;
	
gulp.task("build", ["jekyll"], function () {
});
gulp.task("test", ["jekyll"], function () {
	exec("bundle exec jekyll build -w");
	gulp.src("./htdocs")
		.pipe(server({
			livereload: true,
			port: 8080,
			host: "0.0.0.0"
		}));
});

gulp.task("jekyll", function () {
	return gulp.src(".")
		.pipe(plumber({
			errorHandler: notify.onError("<%= error.message %>")
		}))
		.pipe(gexec("bundle exec jekyll build"))
		.pipe(gexec.reporter());
});

gulp.task("init", function () {
	gulp.src(".")
		.pipe(plumber({
			errorHandler: notify.onError("<%= error.message %>")
		}))
		.pipe(gexec("bower install"))
		.pipe(gexec("bundle install --path vendor/bundle"));
});