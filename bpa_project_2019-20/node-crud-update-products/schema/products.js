import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imagePath: String,
    title: String,
    description : String,
    price: Number

});

var productModel = mongoose.model("products", productSchema);

module.exports = productModel;