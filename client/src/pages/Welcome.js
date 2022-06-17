import React from "react";
import Wrapper from "../assets/wrappers/Home/HomeWrapper";
import ProductRow from "../components/Products/ProductRow";
const Welcome = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="product-list">
            <ProductRow />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Welcome;
