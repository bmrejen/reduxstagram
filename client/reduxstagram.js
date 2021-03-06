import React from "react";
import { render } from "react-dom";
// import css from "./styles/style.styl";
import Main from "./components/Main";
import Photogrid from "./components/Photogrid";
import Single from "./components/Single";
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

// history allows not to have to reload the page. Let's feed if to the router
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
