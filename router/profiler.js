const express = require("express");
const router = express.Router();
const Profiledata = require("../models/profile");

router.post("/getprofile", async (req, res) => {
      const user = req.body.id;
      const users = await Profiledata.findOne({ user_id: user })
      res.json(users);
});




// create
router.post("/profile/create", async (req, res) => {
      const data = new Profiledata({
            user_id: req.body.user_id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            countrycode: req.body.countrycode,
            bio: req.body.bio,
            nickname: req.body.nickname,
            profile: req.body.profile,
            background: req.body.background,

      });
      await data.save();
      res.status(200).json({ type: "Success", message: "Profile Created SuccessFully" });

});




// update

router.put("/update", async (req, res) => {
      var update = await Profile.findByIdAndUpdate(
            { _id: req.body._id },
            {
                  $set: {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                  },
            }
      );
      res
            .status(200)
            .json({ type: "Success", message: "User Register SuccessFully" });
});

// delete

router.delete("/delete", async (req, res) => {
      var delData = await Profile.findOneAndRemove(req.params.id).then((e) => {
            console.log(req.params.id);
            res.json({ message: "deleted successfully" });
      });
      res.json(delData);
});







// commend


module.exports = router;
