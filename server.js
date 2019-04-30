const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser Middleware

app.use(bodyParser.json());

//DB Config

const db = require("./config/keys").mongoURI;

//Connect To Mongo

mongose
  .connect(db)
  .then(() => console.log("Mongoosed Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on ${port}`));
