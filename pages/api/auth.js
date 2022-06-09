// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const userModel = require("../../server/models");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.post("/api/auth", async (request, response) => {
//   const data = { login: req.body.login, password: req.body.password };
//   console.log(request.body);
//   const user = new userModel(request.body);

//   console.log(data);
//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
export default function getUser(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// app.get("/register/register", async (request, response) => {
//   const users = await userModel.find({});
//   console.log("here");

//   try {
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
module.exports = app;
