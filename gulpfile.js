var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var reload 		= browserSync.reload;
var baseDir		= './app';

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: baseDir
        }
    });
    gulp.watch(baseDir + '/**/*', browserSync.reload);
});