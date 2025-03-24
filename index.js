import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers';

// Tạo store với configureStore thay vì createStore
const store = configureStore({
  reducer: allReducers,

});

// Tạo root cho React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Nếu bạn muốn giữ reportWebVitals
reportWebVitals();