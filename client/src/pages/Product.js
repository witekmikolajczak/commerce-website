import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Products/ProductPageWrapper";

const Product = () => {
  const { product, user } = useAppContext();
  console.log(product);
  const { id } = useParams();
  return (
    <Wrapper>
      <div className="left-column">
        <img src={`${product.img}`} alt="product" />
      </div>
      <div className="right-column">
        <h4>{product.title}</h4>
      </div>
    </Wrapper>
  );
};

export default Product;
