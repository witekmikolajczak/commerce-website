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

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide all values!",
      alertType: "danger",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === REGISTER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: "Register successful",
      alertType: "success",
    };
  }
  if (action.type === REGISTER_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: "Email already register!",
      alertType: "danger",
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: "Login successful",
      alertType: "success",
    };
  }
  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: "Invalid email or password!",
      alertType: "danger",
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      showAlert: true,
      alertText: "Logout successful",
      alertType: "success",
    };
  }
  if (action.type === LOGOUT_USER_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: "Something gone wrong!",
      alertType: "danger",
    };
  }
  if (action.type === TOGGLE_NAVBAR) {
    return {
      ...state,
      showDropdown: !state.showDropdown,
    };
  }
  if (action.type === TOGGLE_PRODUCT) {
    return {
      ...state,
      product: [
        {
          id: action.payload.product.id,
          title: action.payload.product.title,
          description: action.payload.product.description,
          img: action.payload.product.img,
        },
      ],
    };
  }
};

export default reducer;
