import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
// import { logger } from "redux-logger";
// import thunk from "redux-thunk";
import reducer from "./reducers/useReducers";
import { Provider } from "react-redux";

const store = createStore( reducer); 

ReactDOM.render(

  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);


