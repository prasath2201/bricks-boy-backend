const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    default: Date.now,
    },
    users: Array,
    senders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
     },
});
messageSchema.virtual("user", {
  ref: "user",
  localField: "senders",
  foreignField: "_id",
});
module.exports = mongoose.model("message", messageSchema);
