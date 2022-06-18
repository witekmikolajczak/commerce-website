import Product from "../models/Product.js";

export const getProduct = async (req, res) => {
  console.log("get products");

  try {
    const item = await Product.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  console.log("create product");
  const item = new Product(req.body);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {}
};
