const express = require("express");
const router = express.Router();

const { getEvents } = require("../controller/eventController");

router.route("/").get(getEvents);

module.exports = router;
