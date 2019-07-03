var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var marcaRouter = require('./routes/marca');
var maniquíRouter = require('./routes/maniquí');
var prendaRouter = require('./routes/prenda');
var maniqui_extremidadRouter = require('./routes/maniqui_extremidad');
var extremidadRouter = require('./routes/extremidad');
var comentarioRouter = require('./routes/comentario');
var categoriaRouter = require('./routes/categoria');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'PAGINA')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/marca', marcaRouter);
app.use('/maniqui', maniquíRouter);
app.use('/prenda', prendaRouter);
app.use('/maniqui_extremidad', maniqui_extremidadRouter);
app.use('/extremidad', extremidadRouter);
app.use('/comentario', comentarioRouter);
app.use('/categoria', categoriaRouter);

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
