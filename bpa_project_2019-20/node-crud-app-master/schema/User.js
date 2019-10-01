import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imagePath: String,
    title: String,
    description : String,
    price: Number

});

var UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;