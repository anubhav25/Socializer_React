import * as actions from "../actions";

const initialStore = {
  user: null,
  loginError: "",
  loading: false
};
export default function AuthReducer(store = initialStore, action) {
  switch (action.type) {
    case actions._LOGIN:
      if (action.payload.response === "success")
        return {
          ...store,
          user: action.payload.user,
          loading: false
        };
      else {
        return {
          ...store,
          loginError: action.payload.message,
          loading: false
        };
      }
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
