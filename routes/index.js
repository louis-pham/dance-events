var express = require('express');
var router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const middleware = require("../middleware/middleware.js");
const moment = require("moment");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Next on Deck', loadCssFile: "/stylesheets/index.css", loadJsFile: "/javascripts/index.js", loggedInUser: req.user });
});

router.get("/about", function(req, res) {
  res.render("about", { title: "About Us", loggedInUser: req.user });
});

router.get("/login", function(req, res) {
  res.render("login", { title: "Login", loggedInUser: req.user });
});

router.get("/profile", middleware.isLoggedIn, function(req, res) {
  User.findById(req.user).populate("eventsCreated").populate("eventsSignedUp").then(user => {
    res.render("profile", { title: "My Profile", loadCssFile: "/stylesheets/profile.css", loggedInUser: user, moment });
  });
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
