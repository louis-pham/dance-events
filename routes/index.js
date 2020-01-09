var express = require('express');
var router = express.Router();
const passport = require("passport");
const middleware = require("../middleware/middleware.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dance Events', loggedInUser: req.user });
});

router.get("/login", function(req, res) {
  res.render("login", { title: "Login", loggedInUser: req.user });
});

router.get("/profile", middleware.isLoggedIn, function(req, res) {
  res.render("profile", { title: "My Profile", loggedInUser: req.user })
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
