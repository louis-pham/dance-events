module.exports = {
  isLoggedIn,
  isLoggedInAPI,
  isEventCreator
}

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/login');
}

function isLoggedInAPI(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.status(403).json({ error: "Not logged in" });
}

function isEventCreator(req, res, next) {
  if (req.isAuthenticated() &&
   (req.user.eventsCreated.includes(req.params.id) || req.user.eventsCreated.includes(req.query.id))) return next();
  res.status(401).json({ error: "Not authorized" });
}
