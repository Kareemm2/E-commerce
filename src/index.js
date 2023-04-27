import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: "404",
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/product",
        element: <Product />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>
);
serviceWorkerRegistration.register();