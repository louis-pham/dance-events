const Event = require("../models/event");

module.exports = {
  index,
  show,
  add: addEvent,
  create
};

function index(req, res) {
  res.render('events/index', { title: 'All Events', loadJsFile: "/javascripts/events.js" });
}

function show(req, res) {
  res.render('events/show', { title: 'Show Event', loadJsFile: "/javascripts/show.js" });
}

function addEvent(req, res) {
  res.render("events/new", { title: "Add Event" } );
}

function create(req, res) {
  // console.log(req.body);
  const event = new Event(req.body);
  console.log(event);
  event.save(function(err, doc) {
    if (err) return res.render("error");
    res.redirect("/events");
  });
}
