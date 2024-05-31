import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'gulp-autoprefixer';

function compileSass() {
    return gulp.src('scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest('assets'))
}
gulp.task('sass', compileSass);

function watchSass() {
    gulp.watch('scss/**/*.scss', compileSass);
}
gulp.task('watch', watchSass);

