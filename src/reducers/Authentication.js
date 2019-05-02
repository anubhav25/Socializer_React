import * as actions from "../actions";

const initialStore = {
  user: null
};
export default function AuthReducer(store = initialStore, action) {
  switch (action.type) {
    case actions._LOGIN:
      return {
        ...store,
        user: {}
      };
    default:
      return store;
  }
}
