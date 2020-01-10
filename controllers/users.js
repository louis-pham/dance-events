const Event = require("../models/event");
const User = require("../models/user");
const moment = require("moment");

module.exports = {
  index,
  show,
  edit,
  update,
  delete: deleteUser,
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
      user,
      moment
    });
  });
}

function edit(req, res) {
  User.findById(req.params.id)
  .then(user => {
    res.render("users/edit", {
      title: `Edit User - ${user.name}`,
      loggedInUser: req.user,
      user
    });
  });
}

function update(req, res) {
  User.updateOne({ _id: req.params.id }, req.body)
  .then(user => {
    res.redirect(`/profile`);
  });

}

function deleteUser(req, res) {
  User.deleteOne({ _id: req.params.id }).then(next => {
    res.redirect('/logout');
  });
}

function addToEvent(req, res) {
  if (!req.user.eventsSignedUp.includes(req.params.id)) {
    Event.findById(req.params.id, function(err, event) {
      if (!event.entries.includes(req.user._id)) {
        event.entries.push(req.user._id);
        event.save();
      }
    }).then(event => {
      // add event to user
      req.user.eventsSignedUp.push(req.params.id);
      req.user.save();
    }).then(user => {
      res.redirect(`/events/show?id=${req.params.id}`);
    }).catch(error => {
      console.log(error);
      res.render(`error`, { error });
    });
  } else {
    res.status(500).json({ error: "user has already signed up for this event!" });
  }
}
