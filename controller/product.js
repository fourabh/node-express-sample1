// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const model = require("../model/product");
const Product = model.Product;

// C R U D with actual database

//Create
exports.createProduct = (req, res) => {
  // console.log(req.body);
  // products.push(req.body);
  const product = new Product(req.body);
  product.save();
  res.json(req.body);
};

//Read All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//Read Product by Id
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  // const product = products.find((p) => p.id === id);
  const product = await Product.findById(id);
  res.json(product);
};

//Update via PUT
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // products.splice(productIndex, 1, { ...req.body, id: id });
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body);
    res.status(201).json();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);

  }
};


//Update via PATCH
exports.updateProduct = async (req, res) => {
  // const id = +req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
   const id = req.params.id;
   try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);

  }

};

exports.deleteProduct = async (req, res) => {
  // const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);
  // res.status(201).json(product);
  const id = req.params.id;
  try {
   const doc = await Product.findOneAndDelete({ _id: id });
   res.status(201).json(doc);
 } catch (err) {
   console.log(err);
   res.status(400).json(err);

 }
};
