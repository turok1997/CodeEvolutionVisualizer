var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var callVolume = require('./routes/call_volume');
var commitRangeRouter = require('./routes/commit_range');
var classOverviewRouter = require('./routes/class_overview');
var commitRangeViewRouter = require('./routes/commit_range_view');
var callVolumeViewRouter = require('./routes/call_volume_view');
var classOverviewViewRouter = require('./routes/class_overview_view');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'some_secret_pass',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/commit_range_data', commitRangeRouter);
app.use('/call_volume', callVolume);
app.use('/class_overview', classOverviewRouter);
app.use('/commit_range_view', commitRangeViewRouter);
app.use('/call_volume_view', callVolumeViewRouter);
app.use('/class_overview_view', classOverviewViewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
