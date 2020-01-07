var express = require('express');
var router = express.Router();
const eventsCtrl = require("../controllers/events");

/* GET home page. */
router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.show);
router.get('/new', eventsCtrl.create);

router.post("/", eventsCtrl.add);

module.exports = router;
