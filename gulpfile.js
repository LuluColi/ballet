const path = require('path');
const gulp = require('gulp');

const ROOT_PATH = path.resolve(__dirname);

// Deploy
const ghPages = require('gulp-gh-pages');
const rsync = require('gulp-rsync');
const PUBLIC_DIR = path.resolve(ROOT_PATH, 'build/**/*');

gulp.task('deploy:prod', () => (
  gulp.src(PUBLIC_DIR).pipe(ghPages({
    remoteUrl: 'ssh://git@github.com/initiumsp/chanel_feature_20161121.git',
  }))
));

gulp.task('deploy:staging', () => {
  return gulp.src(PUBLIC_DIR)
    .pipe(rsync({
      root: 'build/',
      hostname: 'showcase.initiumlab.com',
      username: 'vagrant',
      destination: `/home/vagrant/web/chanel_feature_20161121`,
      incremental: true,
      recursive: true,
      clean: true,
      emptyDirectories: true,
    }));
});
