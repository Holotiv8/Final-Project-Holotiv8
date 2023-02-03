import { createBrowserRouter } from "react-router-dom";
import Talents from "../views/Talents";
import Products from "../views/Products";
import About from "../views/About";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Merchandise from "../views/Merchendise";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/talents",
    element: <Talents />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Merchandise />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
]);

export default router;
