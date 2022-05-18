const express = require("express");
const router = express.Router();
const PropertyData = require("../models/CreateProperty");
const CommandData = require("../models/createcommand");

// create
router.post("/create/property", async (req, res) => {
      const data = new PropertyData({
            name: req.body.name,
            property_image: req.body.property_image,
            period: req.body.period,
            purpose: req.body.purpose,
            description: req.body.description,
            property_type: req.body.property_type,
            revenue_type: req.body.revenue_type,
            measure_unit: req.body.measure_unit,
            capture_area: req.body.capture_area,
            total_area: req.body.total_area,
            year_built: req.body.year_built,
            hand_over: req.body.hand_over,
            pets_allowed: req.body.pets_allowed,
            mobile_number: req.body.mobile_number,
            mobile_number_country_code: req.body.mobile_number_country_code,
            email: req.body.email,
            website: req.body.website,
            assests: req.body.assests,
            user_id: req.body.user_id,
            door_no: req.body.door_no,
            address_line1: req.body.address_line1,
            address_line2: req.body.address_line2,
            landmark: req.body.landmark,
            district: req.body.district,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
            latitude: req.body.latitude,
            longitude: req.body.longitude


      });
      await data.save();
      res.status(200).json({ type: "Success", message: "Property Created SuccessFully" });

});

// update
router.put("/update/property", async (req, res) => {
      var update = await PropertyData.findByIdAndUpdate(
            { _id: req.body._id },
            {
                  $set: {
                        name: req.body.name,
                        property_image: req.body.property_image,
                        period: req.body.period,
                        purpose: req.body.purpose,
                        description: req.body.description,
                        property_type: req.body.property_type,
                        revenue_type: req.body.revenue_type,
                        measure_unit: req.body.measure_unit,
                        capture_area: req.body.capture_area,
                        total_area: req.body.total_area,
                        year_built: req.body.year_built,
                        hand_over: req.body.hand_over,
                        pets_allowed: req.body.pets_allowed,
                        mobile_number: req.body.mobile_number,
                        mobile_number_country_code: req.body.mobile_number_country_code,
                        email: req.body.email,
                        website: req.body.website,
                        assests: req.body.assests,
                        user_id: req.body.user_id,
                        door_no: req.body.door_no,
                        address_line1: req.body.address_line1,
                        address_line2: req.body.address_line2,
                        landmark: req.body.landmark,
                        district: req.body.district,
                        state: req.body.state,
                        country: req.body.country,
                        pincode: req.body.pincode,
                        latitude: req.body.latitude,
                        longitude: req.body.longitude
                  },
            }
      );
      res
            .status(200)
            .json({ type: "Success", message: "Property Updated SuccessFully" });
});
// get all property
router.get("/get/all/property", async (req, res) => {
      var data = await PropertyData.find().select(['name', 'description', 'property_type']);
      res.json(data)
});

// get user id by property
router.get("/get_propertyBy_id", async (req, res) => {
      if (!req.query.id) {
            return res.json({ error: "Please Provide a id" })
      }

      const _id = req.query.id
      const property = await PropertyData.findById({ _id })
      res.json(property);


});

// get property by user id
router.get("/get_propertyBy_user", async (req, res) => {
      if (!req.query.id) {
            return res.json({ error: "Please Provide a id" })
      }
      const user_id = req.query.id
      const users = await PropertyData.find({ user_id })
      res.json(users);
});




// create command
router.post("/command/create", async (req, res) => {
      const data = new CommandData({
            command: req.body.command,
            createdTime: req.body.createdTime,
            createdBy: req.body.createdBy,
            property_id: req.body.property_id
      });
      await data.save();
      res.status(200).json({ type: "Success", message: "Command Created SuccessFully" });

});

// get command by property id
router.get("/get/command", async (req, res) => {
      if (!req.query.id) {
            return res.json({ error: "Please Provide a id" })
      }
      const property_id = req.query.id
      const command = await CommandData.find({ property_id })
      res.json(command);
});


// create reaction
router.post("/command/create", async (req, res) => {
      const data = new CommandData({
            command: req.body.command,
            createdTime: req.body.createdTime,
            createdBy: req.body.createdBy,
            property_id: req.body.property_id
      });
      await data.save();
      res.status(200).json({ type: "Success", message: "Command Created SuccessFully" });

});

// get reaction by property id
router.get("/get/command", async (req, res) => {
      if (!req.query.id) {
            return res.json({ error: "Please Provide a id" })
      }
      const property_id = req.query.id
      const command = await CommandData.find({ property_id })
      res.json(command);
});
module.exports = router;
