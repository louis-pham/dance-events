const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
  index,
  show,
  update,
  addToEvent
};

function index(req, res) {
  res.render('users/index', {
    title: 'All Users',
    loggedInUser: req.user,
  });
}

function show(req, res) {
  User.findById(req.params.id).populate("eventsCreated").populate("eventsSignedUp")
  .then(user => {
    res.render("users/show",{
      title: `User - ${user.name}`,
      loggedInUser: req.user,
      user
    });
  });
}

function update(req, res) {

}

function addToEvent(req, res) {
  console.log(req.params.id);
  console.log(req.user.eventsSignedUp);
  if (!req.user.eventsSignedUp.includes(req.params.id)) {
    Event.findById(req.params.id, function(err, event) {
      if (!event.entries.includes(req.user._id)) {
        event.entries.push(req.user._id);
        event.save();
      }
    }).then(event => {
      console.log("add event to user...");
      req.user.eventsSignedUp.push(req.params.id);
      req.user.save();
    }).then(user => {
      res.redirect(`/events/show?id=${req.params.id}`);
    }).catch(error => {
      console.log("caught error");
      res.render(`error`);
    });
  } else {
    res.status(500).json({ error: "user has already signed up for this event!" });
  }
}
