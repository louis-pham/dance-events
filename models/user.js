const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  handle: {
    type: String
  },
  eventsSignedUp: [{ type: Schema.Types.ObjectId, ref: "Event"}],
  eventsCreated: [{ type: Schema.Types.ObjectId, ref: "Event"}]
},{
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
