//  <!--  File name: COMP229005-F2022-MidTerm-301236167
    // Web App name: COMP229005midterm301236167
    // Student ID: 301236167
    // Name: Chung Hin Ng
    // Data: Oct 25, 2022 -->
let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

// Routes for sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out
router.get('/signout', usersController.signout);

module.exports = router;
