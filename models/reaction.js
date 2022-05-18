const mongoose = require("mongoose");

const ReactionProperty = mongoose.Schema({
      Reactions: {
            type: String,
            trim: true,
      },
      createdTime: {
            type: Date,
            default: Date.now,
      },
      createdBy: {
            type: String,
            default: Date.now,
      },
      command_id: {
            type: mongoose.Schema.ObjectId,
            ref: "command_id"
      },
});
ReactionProperty.virtual("command_id", {
      ref: "command_id",
      localField: "command_id",
      foreignField: "_id",
});
module.exports = mongoose.model("reaction", ReactionProperty);