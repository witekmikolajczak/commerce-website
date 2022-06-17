import { useEffect, useState } from "react";
import { FormRow, FormDescription } from "../components";
import FileBase64 from "react-file-base64";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";
const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;

    .product-name {
      margin-top: 2rem;
      width: 350px;
      input {
        padding: 1.5rem;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
    }
  }
`;
const initialState = {
  title: "",
  descritpion: "",
  image: "",
};
const AddProduct = () => {
  const { createProduct } = useAppContext();
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value || e.target.defaultValue,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    createProduct(product);
    console.log(product);
    // setProduct(result);
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>Upload product!</h1>
        <div>{product.image && <img src={`${product.image}`} />}</div>
        <form action="" onSubmit={onSubmitHandler}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setProduct({ ...product, image: base64 })}
          />
          <FormRow
            className="product-name"
            name="title"
            type="text"
            labelText="Name:"
            max="10"
            placeholder="Enter name of product max 10 letters"
            handleChange={handleChange}
            value={product.title}
          />

          <FormDescription
            rows="10"
            cols="50"
            name="description"
            handleChange={handleChange}
            defaultValue={product.descritpion}
            labelText="Product description"
          />

          <div className="right-align">
            <button className="btn">submit</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default AddProduct;
