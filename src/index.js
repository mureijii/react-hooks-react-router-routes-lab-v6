import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import './index.css';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> },
  { path: '*', element: <ErrorPage /> }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
