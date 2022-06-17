import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
const Product = () => {
  const { product } = useAppContext();
  console.log(product);

  const { id } = useParams();
  return <h1>This is a dynamic page for {id} product</h1>;
};

export default Product;
