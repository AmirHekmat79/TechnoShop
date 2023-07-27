import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './routes/landing';
import Products from './routes/products';
import Suggestions from './routes/suggestions';
import AboutUs from './routes/aboutUs';
import Purchases from './routes/purchases';
import Login from './routes/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'suggestions',
    element: <Suggestions />,
  },
  {
    path: 'purchases',
    element: <Purchases />,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
