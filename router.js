const express = require("express");
const router = express.Router();
const User = require("./models/User");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')


// login 2
router.post("/login", async (req, res) => {
  try {
    var userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).json({
        type: "Error",
        message: "Email is not exists",
      });
    }
    var pass = await bcryptjs.compare(req.body.password, userData.password)
    if (!pass) {
      return res.status(400).json({
        type: "Error",
        message: "Password is not ",
      });
    }

    var userToken = await jwt.sign({ id: userData._id }, 'privacy');

    res.header('auth', userToken).json(userToken)
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// update

router.put("/update", async (req, res) => {
  var update = await User.findByIdAndUpdate(
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

// create
router.post("/register", async (req, res) => {
  try {
    var emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json({
        type: "rejected",
        message: "Email is alerdy exists",
      });
    }

    // hash password

    var hash = await bcryptjs.hash(req.body.password, 10);

    const data = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    console.log(hash);
    await data.save();
    res
      .status(200)
      .json({ type: "Success", message: "User Register SuccessFully" });
  } catch (err) {
    res.status(400).json(err);
  }
});




const validUser = (req, res, next) => {
  var token = req.header('auth');
  req.token = token
  next();
}

router.get("/get", validUser, async (req, res) => {
  jwt.verify(req.token, 'privacy', async (err, data) => {
    if (err) {
      res.sendStatus(403)
    }
    else {
      var data = await User.find().select(['-password', '-__v', '-createdTime']);
      res.json(data);
    }
  })

});

// delete

router.delete("/delete", async (req, res) => {
  var delData = await User.findOneAndRemove(req.params.id).then((e) => {
    console.log(req.params.id);
    res.json({ message: "deleted successfully" });
  });
  res.json(delData);
});

module.exports = router;
