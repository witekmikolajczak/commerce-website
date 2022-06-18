import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/Products/ProductWrapper";

const ProductList = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const { toggleProduct, getProduct, images } = useAppContext();

  const navigate = useNavigate();
  const handleProductClick = (productDetails) => {
    toggleProduct(productDetails);
    navigate("product/" + productDetails.id);
  };

  console.log(images);
  return (
    <Wrapper>
      {images.length > 0
        ? images.map((product) => {
            const { id, title, image, description } = product;
            return (
              <div
                className="product"
                onClick={() => handleProductClick(product)}
                key={Math.random()}
              >
                <div className="product-image">
                  <img src={image} width="200" height="300" alt="product" />
                </div>
                <div className="product-description">
                  <h4>{title}</h4>
                  <p>{description.substring(0, 50)}...</p>
                </div>
              </div>
            );
          })
        : ""}
    </Wrapper>
  );
};

export default ProductList;
