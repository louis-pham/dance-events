var express = require('express');
var router = express.Router();
const eventsCtrl = require("../controllers/events");

/* GET home page. */
router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.add);
router.get('/show', eventsCtrl.show);
router.get('/update', eventsCtrl.update);

// router.post("/", eventsCtrl.create);

module.exports = router;
