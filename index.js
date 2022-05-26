const express = require("express");
const app = express();
const mongoose = require("mongoose");
const infoRouter = require("./router");
const profileRouter = require("./router/profiler");
const propertyRouter = require("./router/property");
const chatRouter = require("./router/chat");
const morgan = require("morgan");
const cors =require('cors')
const socket = require("socket.io");
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
app.use("/api/v1", chatRouter);

const port =  process.env.PORT || 8080 ;
const PORT = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);
// socket
// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// });



// io.on("connection", (socket) => {
//   console.log("socket connected")
//   socket.on("send-msg", (data) => {
//     console.log(data)
//     io.emit("msg-recieve", data);
//   });
//   socket.on('disconnect', () => {
//     console.log('socket disconnected')
//   });
// });



//db connection
mongoose.connect(
  "mongodb+srv://prasath:8667726969@cluster0.vf1wb.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("DB connected");
    }
  }
);
