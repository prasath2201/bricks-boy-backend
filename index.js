const express = require("express");
const app = express();
const mongoose = require("mongoose");
const infoRouter = require("./router");
const profileRouter = require("./router/profiler");
const propertyRouter = require("./router/property");
const morgan = require("morgan");
const cors =require('cors')

app.use(cors())

app.get("/", (req, res) => {
  res.json("Helooooo  prasth");
});

// midelware
app.use(express.json())
app.get(morgan("dev"));

//router
app.use("/api/v1", infoRouter);
app.use("/api/v1", profileRouter);
app.use("/api/v1", propertyRouter);

const port =  process.env.PORT || 8080 ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//db connection
mongoose.connect(
  "mongodb://localhost/app",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("DB connected");
    }
  }
);
