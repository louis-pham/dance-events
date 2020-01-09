var express = require('express');
var router = express.Router();
const eventsCtrl = require("../controllers/events");
const middleware = require("../middleware/middleware.js");

/* GET home page. */
router.get('/', eventsCtrl.index);
router.get('/new', middleware.isLoggedIn, eventsCtrl.add);
router.get('/show', eventsCtrl.show);
router.get('/update', middleware.isEventCreator, eventsCtrl.update);

module.exports = router;
