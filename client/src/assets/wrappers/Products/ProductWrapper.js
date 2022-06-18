import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 2rem;
  .product {
    min-width: 380px;
    margin-bottom: 20px;
    border: 2px solid black;
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      box-shadow: 10px 10px 5px #a1a1a1;
    }
    .product-image {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid black;
    }
    .product-description {
      padding: 1rem;
    }
  }
`;

export default Wrapper;
