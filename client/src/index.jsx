import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { PaginationContextProvider } from "./context/paginationContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PaginationContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PaginationContextProvider>
    </Provider>
  </React.StrictMode>
);
/* const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <PaginationContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PaginationContextProvider>
</Provider>,
  rootElement
); */