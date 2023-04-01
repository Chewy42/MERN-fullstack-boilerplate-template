const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET;

//routes go here

//

module.exports = router;