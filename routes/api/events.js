var express = require('express');
var router = express.Router();
const eventsApiCtrl = require("../../controllers/api/events");
const middleware = require("../../middleware/middleware.js");

router.get('/', eventsApiCtrl.index);
router.get('/featured', eventsApiCtrl.featured);
router.get('/some', eventsApiCtrl.some);
router.post('/', middleware.isLoggedInAPI, eventsApiCtrl.create);
router.get('/:id', eventsApiCtrl.show);
router.put('/:id', middleware.isEventCreator, eventsApiCtrl.update);
router.delete('/:id', middleware.isEventCreator, eventsApiCtrl.delete);

module.exports = router;
