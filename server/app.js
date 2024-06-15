require("dotenv").config();
const express =require("express");
const app =express();
const mongoose = require("mongoose");

require("./utils/db");
const users = require("./models/userSchema");

const port = 8003;


app.listen(port,()=>{
    console.log(`server is running on port no. ${port}`);
})