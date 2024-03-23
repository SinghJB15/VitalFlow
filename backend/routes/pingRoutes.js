const express = require("express");
const router = express.Router();
const pingController = require("../controllers/pingController");

//Ping route
router.get("/", pingController.ping);

module.exports = router