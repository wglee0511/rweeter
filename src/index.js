import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import store from "./redux/configStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
