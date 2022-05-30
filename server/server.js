const express = require("express");

const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();
app.use(express.json());
const username = "witekmikolajczak";
const password = "by9svez7";
const cluster = "cluster0.crx78";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);
// app.use(cors);
app.listen(3500, () => {
  console.log("Server is running at port 3500");
});
