var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/****  GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
****/

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMgs = ""  //req.flash('success')[0];
  Product.find(function(err, docs){
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i  + chunkSize));
      }
      res.render('shop/index', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
  });
});

module.exports = router;
