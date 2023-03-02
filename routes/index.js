var express = require('express');
var router = express.Router();
var mainController = require("../controllers/controllerMain");

/* GET home page. */
router.get("/", mainController.index);

module.exports = router;
