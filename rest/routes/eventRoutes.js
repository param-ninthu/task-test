const express = require("express");
const router = express.Router();

const { fetchEvents } = require("../controller/eventController");

router.route("/").get(fetchEvents);

module.exports = router;
