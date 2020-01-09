const Event = require("../../models/event");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteEvent
};

function index(req, res) {
  Event.find({})
  .then(events => {
    res.status(200).json(events);
  });
}

function create(req, res) {//
  //TODO: validate that user is logged in
  req.body.creator = req.user._id;
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
  Event.findById(req.params.id)
  .then(event => {
    if (event) return res.status(200).json(event);
    res.status(404).json({ error: "Event not found" });
  })
  .catch(err => {
    res.status(500).json({ error: "OH NO!", err });
  });;
}

function update(req, res) {
  //TODO: mongoose validators arent run on update, so check the input values manually
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }).then( event => {
      res.status(200).json(event);
    });
}

function deleteEvent(req, res) {
  //TODO: validate that it is the creator deleting the event
  req.user.eventsCreated.pull(req.params.id);
  req.user.save()
  .then(user => {
    return Event.findByIdAndDelete(req.params.id);
  })
  .then( result => {
    res.json(result);
  });
}
