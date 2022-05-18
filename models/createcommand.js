const mongoose = require("mongoose");

const commandProperty = mongoose.Schema({
      command: {
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
      property_id: {
            type: mongoose.Schema.ObjectId,
            ref: "commands"
      },
});
commandProperty.virtual("commands", {
      ref: "commands",
      localField: "property_id",
      foreignField: "_id",
});
module.exports = mongoose.model("command", commandProperty);