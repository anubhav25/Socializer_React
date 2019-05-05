import * as actions from "../actions";
let user = null;
try {
  user = JSON.parse(atob(atob(localStorage.getItem("user"))));
  user = (user && user.username && user._id && user) || null;
} catch {
  user = null;
}
const initialStore = {
  user,
  loginError: "",
  loginLoading: false,
  loginSuccess: false,
  changePasswordError: "",
  changePasswordLoading: false,
  changePasswordSuccess: false
};
export default function AuthReducer(store = initialStore, action) {
  switch (action.type) {
    case actions._LOGIN_SUCCESS:
      return {
        ...store,
        user: action.payload,
        loginLoading: false,
        loginSuccess: true
      };
    case actions._LOGIN_FAIL:
      return {
        ...store,
        loginError: action.payload,
        loginLoading: false,
        loginSuccess: false
      };
    case actions.LOGIN:
      return {
        ...store,
        loginLoading: true,
        loginError: ""
      };
    case actions.LOGOUT:
      return {
        ...store,
        user: null,
        loginLoading: false
      };
    case actions._CHANGEPASSWORD_SUCCESS:
      return {
        ...store,
        changePasswordError: "",
        changePasswordLoading: false,
        changePasswordSuccess: true
      };
    case actions.CHANGEPASSWORD:
      return {
        ...store,
        changePasswordError: "",
        changePasswordLoading: true
      };
    case actions._CHANGEPASSWORD_FAIL:
      return {
        ...store,
        changePasswordError: action.payload,
        changePasswordLoading: false,
        changePasswordSuccess: false
      };
    default:
      return store;
  }
}
