const mongoose = require("mongoose");

const createProperty = mongoose.Schema({
      name: {
            type: String,
            trim: true
      },
      property_image: {
            type: String,
            trim: true
      },
      period: {
            type: String,
            trim: true
      },
      description: {
            type: String,
            trim: true,
      },
      purpose: {
            type: String,
            trim: true
      },
      property_type: {
            type: String,
            trim: true
      },
      revenue_type: {
            type: String,
            trim: true
      },
      measure_unit: {
            type: String,
            trim: true
      },
      capture_area: {
            type: String,
            trim: true
      },
      total_area: {
            type: String,
            trim: true
      },
      year_built: {
            type: String,
            trim: true
      },
      hand_over: {
            type: String,
            trim: true
      },
      pets_allowed: {
            type: Boolean,
            trim: true
      },
      mobile_number: {
            type: Number,
            trim: true
      },
      mobile_number_country_code: {
            type: Number,
            trim: true
      },
      email: {
            type: String,
            trim: true
      },
      website: {
            type: String,
            trim: true
      },
      created_date: {
            type: Date,
            default: Date.now,
      },
      assests:{
            type: Array,
            trim: true,
      },
      door_no: {
            type: String,
            trim: true,
      },
      address_line1: {
            type: String,
            trim: true,
      },
      address_line2: {
            type: String,
            trim: true,
      },
      landmark: {
            type: String,
            trim: true,
      },
      district: {
            type: String,
            trim: true,
      },
      state: {
            type: String,
            trim: true,
      },
      country: {
            type: String,
            trim: true,
      },
      pincode: {
            type: String,
            trim: true,
      },
      latitude: {
            type: String,
            trim: true
      },
      longitude: {
            type: String,
            trim: true
      },
      user_id: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
      },
});
createProperty.virtual("user", {
      ref: "user",
      localField: "user_id",
      foreignField: "_id",
});
module.exports = mongoose.model("properties", createProperty);
