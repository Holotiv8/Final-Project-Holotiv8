import { createBrowserRouter } from "react-router-dom";
import DemoCarousel from "../views/Talents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DemoCarousel/>
    }
]);

export default router;
