// <!--  File name: midterm
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