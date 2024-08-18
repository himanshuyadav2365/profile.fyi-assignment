import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../components/pages/ProductPage";
import CartPage from "../components/pages/CartPage";

 const router =createBrowserRouter([
    {
    path:"/",
    element:<ProductPage/>
    },
    {
    path:"/cart",
    element:<CartPage/>
    }
])

export default router