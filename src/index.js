import React from 'react';
import ReactDOM from 'react-dom/client';
//bs5 link
import 'bootstrap/dist/css/bootstrap.min.css';
//react Toastify link
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
