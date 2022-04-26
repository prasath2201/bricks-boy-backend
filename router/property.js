const express = require("express");
const router = express.Router();
const PropertyData = require("../models/CreateProperty");

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
            user_id:req.body.user_id,


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
                        user_id:req.body.user_id,
                  },
            }
      );
      res
            .status(200)
            .json({ type: "Success", message: "Property Updated SuccessFully" });
});

module.exports = router;
