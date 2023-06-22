const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema
const blogSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [1, "wrongPrice"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", blogSchema);
