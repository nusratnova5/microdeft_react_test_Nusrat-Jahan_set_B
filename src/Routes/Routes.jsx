import { createBrowserRouter } from "react-router-dom";
import Products from "../Conponents/AllProducts/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <From/>,
    },
    {
        path: "/products",
        element: < Products/>,
    },
]);
