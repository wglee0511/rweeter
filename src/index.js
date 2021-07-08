import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import store from "./redux/configStore";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
