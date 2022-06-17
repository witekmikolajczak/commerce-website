import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  TOGGLE_NAVBAR,
  TOGGLE_PRODUCT,
} from "./actions";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const product = localStorage.getItem("product");
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.stringify(user) : null,
  token: token || null,
  showDropdown: false,
  product: product ? JSON.parse(product) : null,
};

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const addProductToLocalStorage = ({ product }) => {
    localStorage.setItem("product", JSON.stringify(product));
  };
  const registerUser = async (currentUser) => {
    dispatch({
      type: REGISTER_BEGIN,
    });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = response.data;

      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user, token },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
      });
    }
  };
  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = response.data;
      console.log(user, token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const logoutUser = () => {
    try {
      dispatch({
        type: LOGOUT_USER,
      });
      removeUserFromLocalStorage();
    } catch (error) {
      dispatch({
        type: LOGOUT_USER_ERROR,
      });
    }
  };

  const toggleNavbar = () => {
    dispatch({
      type: TOGGLE_NAVBAR,
    });
  };

  const toggleProduct = (product) => {
    dispatch({
      type: TOGGLE_PRODUCT,
      payload: { product },
    });
    addProductToLocalStorage({ product });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        logoutUser,
        toggleNavbar,
        toggleProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
