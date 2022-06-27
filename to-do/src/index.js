import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ToDo from "./components/ToDo"
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>toDo app</h1>
      <ToDo />
    </Provider>
  </React.StrictMode>
);


