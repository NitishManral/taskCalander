import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
  ]);
root.render(
    <Provider store={store} >
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </Provider>
);
