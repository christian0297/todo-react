import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ToDo from "./components/ToDo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>toDO app</h1>
    <ToDo />
  </React.StrictMode>
);


