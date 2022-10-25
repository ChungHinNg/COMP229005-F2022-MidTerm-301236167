//  <!--  File name: COMP229005-F2022-MidTerm-301236167
    // Web App name: COMP229005midterm301236167
    // Student ID: 301236167
    // Name: Chung Hin Ng
    // Data: Oct 25, 2022 -->
exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};