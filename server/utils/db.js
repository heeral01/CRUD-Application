const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/CRUD-APP";

mongoose
  .connect(DB)
  .then(() => console.log("Connection sussecfully"))
  .catch((error) => console.log(error.message));
