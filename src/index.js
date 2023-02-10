import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import browserrouter
import { BrowserRouter } from 'react-router-dom';
// Importing the newly created store implementation we have just created using
// the configureStore function.
import { Provider } from "react-redux";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

