const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware

app.use(bodyParser.json());

//DB Config

const db = require("./config/keys").mongoURI;

//Connect To Mongo

mongose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("Mongoosed Connected"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));
