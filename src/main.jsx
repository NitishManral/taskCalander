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
import Registration from './components/Registration';
import ErrorBoundary from './components/ErrorBoundary';
import VerifyEmail from './components/VerifyEmail';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration/>,
      children:[
        {
          path: "/verify",
          element: <VerifyEmail/>,
        }
      ]
    },
    {
        path: "/home",
        element: <App/>,
    },
    {
        path: "/login",
        element: <>Login</>
        // TODO: Add Login component
    },
  ]);
root.render(
    <Provider store={store} >
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </Provider>
);
