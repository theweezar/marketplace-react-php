import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./redux/redux";
import App from './App';
import reportWebVitals from './reportWebVitals';


let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
