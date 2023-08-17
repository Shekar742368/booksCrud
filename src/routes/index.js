const express = require("express");
const { globalGet } = require("../controllers/globalController");
const router = express.Router();

router.get("/", globalGet);

module.exports = router;
