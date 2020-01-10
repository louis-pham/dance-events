var express = require('express');
var router = express.Router();
const usersCtrl = require("../controllers/users");
const middleware = require("../middleware/middleware.js");

router.get("/users", usersCtrl.index);
router.get("/users/:id", usersCtrl.show);
router.get('/users/:id/edit', middleware.isLoggedIn, usersCtrl.edit);
router.put('/users/:id', middleware.isLoggedIn, usersCtrl.update);
router.delete('/users/:id', middleware.isLoggedIn, usersCtrl.delete);
router.post("/events/:id/entries", middleware.isLoggedIn, usersCtrl.addToEvent);

module.exports = router;
