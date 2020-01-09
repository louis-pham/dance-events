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
    loadJsFile: "/javascripts/events.js" ,
    user: req.user,
  });
}

function show(req, res) {
  res.render('events/show', {
    title: 'Show Event',
    loadJsFile: "/javascripts/show.js",
    user: req.user,
    id: req.query.id
  });
}

function addEvent(req, res) {
  res.render("events/new", {
    title: "Add Event",
    loadJsFile: "/javascripts/new.js",
    user: req.user,
  });
}

function update(req, res) {
  res.render("events/update", {
    title: "Update Event",
    loadJsFile: "/javascripts/update.js",
    user: req.user,
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
