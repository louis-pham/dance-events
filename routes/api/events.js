var express = require('express');
var router = express.Router();

const eventsApiCtrl = require("../../controllers/api/events");

router.get('/', eventsApiCtrl.index);
router.post('/',  eventsApiCtrl.create);
router.get('/:id',  eventsApiCtrl.show);
router.put('/:id',  eventsApiCtrl.update);
router.delete('/:id',  eventsApiCtrl.delete);

module.exports = router;
