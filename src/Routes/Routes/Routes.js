import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import Allbuyers from "../../Pages/DashBoard/Allbuyers/Allbuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProduct from "../../Pages/DashBoard/MyProduct/MyProduct";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
// import Category from "../../Pages/Home/Categories/Category";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AddminRoute from "../AddminRoute/AddminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                element: <PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({ params }) => fetch(`https://laptop-bazar-server-theta.vercel.app/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AddminRoute><AllUsers></AllUsers></AddminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AddminRoute><AllSellers></AllSellers></AddminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AddminRoute> <Allbuyers></Allbuyers></AddminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://laptop-bazar-server-theta.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])
export default router;