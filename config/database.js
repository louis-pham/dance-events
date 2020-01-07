const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eventsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connected at ${db.host}:${db.port}`);
});
