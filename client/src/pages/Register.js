import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

// Components
import { FormRow, Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const {
    isLoading,
    showAlert,
    alertText,
    alertType,
    displayAlert,
    clearAlert,
    registerUser,
    loginUser,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    clearAlert();
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (!isMember) {
      registerUser(currentUser);
    } else {
      loginUser(currentUser);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert alertText={alertText} alertType={alertType} />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            labelText="Name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          labelText="Email"
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          labelText="Password"
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not registred yet?" : "Already register?"}

          <button type="button" className="member-btn" onClick={toggleMember}>
            {!values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
