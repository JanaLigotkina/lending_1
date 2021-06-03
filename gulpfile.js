const { src, dest } = require('gulp');

function streamTask() {
  return src('js/*.js')
    .pipe(src(['style/*.css', '!style/style_.css']))
    .pipe(dest('output'));
}

exports.default = streamTask;