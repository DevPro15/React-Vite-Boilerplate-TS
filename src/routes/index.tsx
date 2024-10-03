//REACT
import React, { Suspense } from "react";
//ROUTER-DOM
import { createBrowserRouter } from "react-router-dom";
//COMPONENTS
import Loader from "../components/UI/Loader";
import Layout from "../pages/Layout";
//PAGES
import Error from "../pages/Error";
import Home from "../pages";
//PROTECTED ROUTE
// import { ProtectedRoute } from '../utils/ProtectedRoutes';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        {/* <ProtectedRoute> */}
        <Layout />
        {/* </ProtectedRoute> */}
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            {/* <ProtectedRoute> */}
            <Home />
            {/* </ProtectedRoute> */}
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: (
      <React.Suspense>
        <Error />
      </React.Suspense>
    ),
  },
]);
