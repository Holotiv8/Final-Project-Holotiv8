import { createBrowserRouter } from "react-router-dom";
import Talents from "../views/Talents";
import Products from "../views/Products";
import About from "../views/About";
import HomePage from "../views/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Talents />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element:<HomePage />
  },
]);

export default router;
