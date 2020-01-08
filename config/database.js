const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connected at ${db.host}:${db.port}`);
});
