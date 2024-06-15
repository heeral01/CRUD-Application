const mongoose = require("mongoose");



mongoose
  .connect(process.env.MONGOOSE)
  .then(() => console.log("Connection successfully"))
  .catch((error) => console.log(error.message));
