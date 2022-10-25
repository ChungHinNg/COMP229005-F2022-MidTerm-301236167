// <!--  File name: midterm
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 25, 2022 -->
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
