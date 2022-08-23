import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Reducers from './components/Reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
