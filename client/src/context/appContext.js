import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./actions";
import axios from "axios";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
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

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
