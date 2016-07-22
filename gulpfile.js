var gulp 		    = require('gulp');
var browserSync     = require('browser-sync');
var reload 		    = browserSync.reload;
var appDirectory   = 'app/';

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './',
            index: appDirectory + 'index.html'
        }
    });
    gulp.watch(appDirectory + '**/*', browserSync.reload);
});