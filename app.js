var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const battlesRouter = require('./routes/battles');
const battlesHighRankRouter = require('./routes/battlesHighRank');
const userNoLoginRouter = require('./routes/usernologin');
const userNoLoginOfflineRouter = require('./routes/usernologinoffline');
const userLoginRouter = require('./routes/userlogin');


const battleTestRouter = require('./routes/battletest');

const cleanDataRouter = require('./routes/cleanData');


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
app.use('/users', usersRouter);
app.use('/battles', battlesRouter);
app.use('/battletest', battleTestRouter);
app.use('/usernologin', userNoLoginRouter);
app.use('/usernologinoffline', userNoLoginOfflineRouter);
app.use('/userlogin', userLoginRouter);


app.use('/battlesHighRank', battlesHighRankRouter);

app.use('/cleandata', cleanDataRouter);


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
