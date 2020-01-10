const Event = require("../../models/event");
const User = require("../../models/user");

module.exports = {
  index,
  featured,
  some,
  create,
  show,
  update,
  delete: deleteEvent
};

function index(req, res) {
  Event.find({})
  .sort({ time: "ascending" })
  .then(events => {
    res.status(200).json(events);
  });
}

function featured(req, res) {
  Event.find({ isFeatured: true })
  .sort({ time: "ascending" })
  .then(events => {
    res.status(200).json(events);
  });
}

function some(req, res) {
  Event.find()
  .sort({ time: "ascending" })
  .limit(5)
  .then(events => {
    res.status(200).json(events);
  });
}

function create(req, res) {//
  req.body.creator = req.user._id;
  console.log(req.body);
  Event.create(req.body)
  .then(event => {
    res.status(201).json(event);
    return event;
  })
  .catch(err => {
    res.status(500).json({ error: "Something went wrong" });
  })
  .then(event => {
    req.user.eventsCreated.push(event._id);
    req.user.save();
  })
  .catch(err => {
    console.log(err);
  });
}

function show(req, res) {
  Event.findById(req.params.id).populate("creator").populate("entries")
  .then(event => {
    if (event) return res.status(200).json(event);
    res.status(404).json({ error: "Event not found" });
  })
  .catch(err => {
    res.status(500).json({ error: "OH NO!", err });
  });;
}

function update(req, res) {
  // mongoose validators arent run on update, so may need to check inputs here
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }).then( event => {
    res.status(200).json(event);
  });
}

function deleteEvent(req, res) {
  if (!req.user.eventsCreated.includes(req.params.id)) {
    return res.status(401).json({ error: "You cannot delete this event." });
  }
  req.user.eventsCreated.pull(req.params.id);
  req.user.save().then(() => {
    // delete event from each user that signed up for it
    User.updateMany({ eventsSignedUp: req.params.id },
      { $pull: {eventsSignedUp: req.params.id} }
    ).exec();
  })
  .then(() => {
    return Event.findByIdAndDelete(req.params.id);
  })
  .then( result => {
    res.json(result);
  });
}
