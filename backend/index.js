const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => res.send("Hello World!"));

// API routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

//DO NOT TOUCH unless you know what you're doing
//Allows front end to communicate with backend
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
