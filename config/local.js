//  <!--  File name: COMP229005-F2022-MidTerm-301236167
    // Web App name: COMP229005midterm301236167
    // Student ID: 301236167
    // Name: Chung Hin Ng
    // Data: Oct 25, 2022 -->
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function() {
    passport.use(new LocalStrategy((username, password, done)=>{
        User.findOne({username: username}, (err, user)=>{
            if (err) {
                return done(err);
            }
            
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
    
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            
            return done(null, user);
        });
    }));
};