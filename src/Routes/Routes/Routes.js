import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
// import Category from "../../Pages/Home/Categories/Category";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])
export default router;