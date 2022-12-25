import React from "react";
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SideNav from "./components/Sidenav/SideNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Product/Products";
import AddNewProduct from "./pages/Product/AddNew";
import Details from "./pages/Product/Details";

const Layout = () => {
  return (
    <div className="flex space-x-2">
      <SideNav />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products/",
        element: <Products />,
      },
      {
        path: "/products/add-new-product",
        element: <AddNewProduct />,
      },
      {
        path: "/products/details/:id",
        element: <Details />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
