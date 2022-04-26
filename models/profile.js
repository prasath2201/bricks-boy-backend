const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
      name: {
            type: String,
            trim: true,
            required: true,
      },
      phone: {
            type: Number,
            trim: true,
            required: true,
      },
      countrycode: {
            type: Number,
            trim: true,
      },
      email: {
            type: String,
            trim: true,
            required: true,
      },
      nickname: {
            type: String,
            trim: true,
      },
      bio: {
            type: String,
            trim: true,
      },
      profile: {
            type: String,
            trim: true,
      },
      background: {
            type: String,
            trim: true,
      },
      createdTime: {
            type: Date,
            default: Date.now,
      },
      user_id: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
            required: true,
      },
});
profileSchema.virtual("user", {
      ref: "user",
      localField: "user_id",
      foreignField: "_id",
});
module.exports = mongoose.model("profile", profileSchema);
