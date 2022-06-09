const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userModel = require("./models");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/register/register", async (req, res) => {
  const data = { login: req.body.email, password: req.body.password };
  const user = new userModel(req.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
