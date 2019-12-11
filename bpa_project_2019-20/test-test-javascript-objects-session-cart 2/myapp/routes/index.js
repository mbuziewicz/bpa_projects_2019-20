var express = require('express');
var router = express.Router();
var session = require('express-session')

// Use the session middleware
router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.json(req.session.cookie.maxAge);
  //res.write('<p>views: ' + req.session.views + '</p>')
});

/* GET page2. */
router.get('/page2', function(req, res, next) {
  res.render('index2', { title: 'Express' });
  //res.json(req.session.cookie.maxAge);
  //res.write('<p>views: ' + req.session.views + '</p>')
});

module.exports = router;
