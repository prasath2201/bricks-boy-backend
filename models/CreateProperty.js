const mongoose = require("mongoose");

const createProperty = mongoose.Schema({
      name: {
            type: String,
            trim: true,
            required: true,
      },
      property_image: {
            type: String,
            trim: true,
            required: true,
      },
      period: {
            type: String,
            trim: true,
            required: true,
      },
      description: {
            type: String,
            trim: true,
      },
      purpose: {
            type: String,
            trim: true,
            required: true,
      },
      property_type: {
            type: String,
            trim: true,
            required: true,
      },
      revenue_type: {
            type: String,
            trim: true,
            required: true,
      },
      measure_unit: {
            type: String,
            trim: true,
            required: true,
      },
      capture_area: {
            type: String,
            trim: true,
            required: true,
      },
      total_area: {
            type: String,
            trim: true,
            required: true,
      },
      year_built: {
            type: String,
            trim: true,
            required: true,
      },
      hand_over: {
            type: String,
            trim: true,
            required: true,
      },
      pets_allowed: {
            type: Boolean,
            trim: true,
            required: true,
      },
      mobile_number: {
            type: Number,
            trim: true,
            required: true,
      },
      mobile_number_country_code: {
            type: Number,
            trim: true,
            required: true,
      },
      email: {
            type: String,
            trim: true,
            required: true,
      },
      website: {
            type: String,
            trim: true,
            required: true,
      },
      created_date: {
            type: Date,
            default: Date.now,
      },
      assests:{
            type: Array,
            trim: true,
      },
      user_id: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
            required: true,
      },
});
createProperty.virtual("user", {
      ref: "user",
      localField: "user_id",
      foreignField: "_id",
});
module.exports = mongoose.model("properties", createProperty);
