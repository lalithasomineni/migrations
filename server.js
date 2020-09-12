const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000||process.env.port;
const mongodburl = process.env.mongodburl||"mongodb://localhost/";



mongoose
  .connect(mongodburl)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

app.use("/",require("./routes/appice_users"));
app.use("/duplicate",require("./routes/appicedb_users"));

app.listen(port,()=>{
	console.log("server started...");
})