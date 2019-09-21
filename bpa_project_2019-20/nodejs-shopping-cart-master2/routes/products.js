var express = require('express');
var mongoose = require('mongoose');
var Product = require('../models/product');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('products/home');
    /*
    res.status(200).json({
        message:"Serving Products on the Endpoint."

    });   
    */
});

router.get("/list", (req, res, next) => {
    Product.find({})
        .exec()
        .then(docs => {
            res.render('products/home');
           /* res.status(200).json({
                docs
            });
            */
           console.log("Product: " + Product)
        })
        .catch(err => {
            console.log(err)
        });
});

router.post("/add", (req, res, next) => {

    const Product = new Product({
        _id: mongoose.Types.ObjectId(),
        imagePath: req.body.imagePath,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price 
    });

    Product.save()
    .then(result => {
        res.status(200).json({
            docs:[Product]
        });
    })
    .catch(err => {
        console.log(err);
    });
});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    Product.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;