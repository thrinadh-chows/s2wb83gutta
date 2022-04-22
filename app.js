var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var gift = require('./models/gift');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function (username, password, done) {
    Account.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }))


var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var giftRouter = require('./routes/gift')
var addmodsRouter = require('./routes/addmods')
var selectorRouter = require('./routes/selector')


const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-localmongoose");
const accountSchema = new Schema({
 username: String,
 password: String
});
accountSchema.plugin(passportLocalMongoose);
// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);

let reseed = true;
if (reseed) { recreateDB(); }


async function recreateDB() {
  // Delete everything 
  await gift.deleteMany();

  let instance1 = new gift({ gifttype: "watch", occasion: "birthday", cost: 30 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new gift({ gifttype: "Phone", occasion: "Wedding", cost: 130 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Seccond object saved")
  });
  let instance3 = new gift({ gifttype: "Key", occasion: "Dating", cost: 230 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gift', giftRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
