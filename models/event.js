const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  entries: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
  timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);
