// const Event = require("../models/events");

module.exports = {
  index,
  show,
  add: addEvent,
  create
};

function index(req, res) {
  res.render('events/index', { title: 'All Events', loadJsFile: true });
}

function show(req, res) {
  res.render('events/show', { title: 'Event ABC' });
}

function addEvent(req, res) {
res.render("events/new", { title: "Add Event" } );
}

function create(req, res) {
  const event = new Event(req.body);
  event.save(function(err, evt) {
    if (err) return res.render("error");
    res.redirect("/events");
  });
}
