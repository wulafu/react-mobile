import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootStore, StoreContext } from "./stores";
import App from "@/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={new RootStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
