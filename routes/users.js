var express = require('express');
var router = express.Router();
const usersCtrl = require("../controllers/users");
const middleware = require("../middleware/middleware.js");

router.get("/users", usersCtrl.index);
router.get("/users/:id", usersCtrl.show);
// router.get('/update', usersCtrl.update);
router.post("/events/:id/entries", middleware.isLoggedIn, usersCtrl.addToEvent);

module.exports = router;
