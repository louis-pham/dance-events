const Event = require("../models/event");
module.exports = {
  index,
  show,
  add: addEvent,
  update
  // create
};

function index(req, res) {
  res.render('events/index', {
    title: 'All Events',
    loadCssFile: "/stylesheets/events.css",
    loadJsFile: "/javascripts/events.js",
    loggedInUser: req.user,
  });
}

function show(req, res) {
  res.render('events/show', {
    title: 'Show Event',
    loadJsFile: "/javascripts/show.js",
    loggedInUser: req.user,
    id: req.query.id
  });
}

function addEvent(req, res) {
  res.render("events/new", {
    title: "Add Event",
    loadCssFile: "/stylesheets/new.css",
    loadJsFile: "/javascripts/new.js",
    loggedInUser: req.user,
  });
}

function update(req, res) {
  res.render("events/update", {
    title: "Update Event",
    loadCssFile: "/stylesheets/update.css",
    loadJsFile: "/javascripts/update.js",
    loggedInUser: req.user,
    id: req.query.id
  });
}

// function create(req, res) {
//   // console.log(req.body);
//   const event = new Event(req.body);
//   console.log(event);
//   event.save(function(err, doc) {
//     if (err) return res.render("error");
//     res.redirect("/events");
//   });
// }
