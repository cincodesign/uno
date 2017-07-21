import notify from 'gulp-notify';

const plumberConfig = {
  errorHandler: notify.onError('Error: <%= error.message %>'),
};

export default plumberConfig;
