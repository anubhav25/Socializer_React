import * as actions from "../actions";

const initialStore = {
  user: null,
  loginError: "",
  loading: false
};
export default function AuthReducer(store = initialStore, action) {
  switch (action.type) {
    case actions._LOGIN_SUCCESS:
      return {
        ...store,
        user: action.payload,
        loading: false
      };
    case actions._LOGIN_FAIL:
      return {
        ...store,
        loginError: action.payload,
        loading: false
      };
    case actions.LOGIN:
      return {
        ...store,
        loading: true,
        loginError: ""
      };
    default:
      return store;
  }
}
