var express = require('express');
var router = express.Router();

const eventsRouter = require("./events");
router.use("/events", eventsRouter);

module.exports = router;
