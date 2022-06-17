import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/Products/ProductWrapper";
import tshirt0 from "../../assets/images/t-shirt0.png";
import tshirt1 from "../../assets/images/t-shirt1.png";
const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt0,
    },
    {
      id: 2,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt1,
    },
    {
      id: 3,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt1,
    },
    {
      id: 4,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt1,
    },
    {
      id: 5,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt0,
    },
    {
      id: 6,
      title: "T-shirt",
      description: "Nice in touch, soft material, high recommended",
      img: tshirt1,
    },
  ];
  const { toggleProduct } = useAppContext();
  const navigate = useNavigate();
  const handleProductClick = (productDetails) => {
    toggleProduct(productDetails);

    navigate("product/" + productDetails.id);
  };
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, title, img, description } = product;
        return (
          <div
            className="product"
            onClick={() => handleProductClick(product)}
            key={Math.random()}
          >
            <div className="product-image">
              <img src={img} width="200" height="300" alt="product" />
            </div>
            <div className="product-description">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ProductList;
