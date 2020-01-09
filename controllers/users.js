const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
  index,
  show,
  update
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
