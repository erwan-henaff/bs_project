var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const battlesRouter = require('./routes/battles');
const userNoLoginRouter = require('./routes/usernologin');
const userNoLoginOfflineRouter = require('./routes/usernologinoffline');
const userLoginRouter = require('./routes/userlogin');


///////////////////////////   cronjob stat 
const {task001, task002, task003, task004, task005} = require('./stat/stat');
// let taskArray = [];
task001.start();
task002.start();
task003.start();
task004.start();
task005.start();



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));


////////////////// connect to database 
mongoose.connect('mongodb://localhost:27017/bs_project', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/battles', battlesRouter);
app.use('/usernologin', userNoLoginRouter);
app.use('/usernologinoffline', userNoLoginOfflineRouter);
app.use('/userlogin', userLoginRouter);


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
