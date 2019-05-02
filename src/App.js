import React from "react";
import "./App.scss";
import store from "./store";
import Login from "./components/login";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
