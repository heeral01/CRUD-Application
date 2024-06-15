const mongoose = require("mongoose");



mongoose
  .connect(process.env.MONGOOSE)

  .connect(DB)

  .then(() => console.log("Connection successfully"))
  .catch((error) => console.log(error.message));
