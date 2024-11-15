import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { 
        index: true, 
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ],
  },
]);

export default router;
