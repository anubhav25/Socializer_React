import * as actions from "../actions";

const initialStore = {
  tempuser: null,
  errMsg: "",
  searchItems: []
};
export default function UserReducer(store = initialStore, action) {
  switch (action.type) {
    case actions._GETUSER_SUCCESS:
      return {
        ...store,
        tempuser: action.payload
      };
    case actions._GETUSER_FAIL:
      return {
        ...store,
        errMsg: action.payload
      };
    case actions._SEARCH_SUCCESS:
      return {
        ...store,
        searchItems: action.payload,
        errMsg: ""
      };
    case actions._SEARCH_FAIL:
      return {
        ...store,
        searchItems: [],
        errMsg: action.payload
      };
    default:
      return store;
  }
}
