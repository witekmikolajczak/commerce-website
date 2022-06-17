import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
