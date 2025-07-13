//client pages
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Basket from "../pages/client/Basket";
import Checkout from "../pages/client/Checkout";
import Contact from "../pages/client/Contact";
import Shop from "../pages/client/Shop";
import ProductDetail from "../pages/client/ProductDetail";
import Wishlist from "../pages/client/Wishlist";

//client auth pages
import ResetPassword from "../pages/client/ResetPassword";
import ForgotPassword from "../pages/client/ForgotPassword";
import Register from "../pages/client/Register";
import Login from "../pages/client/Login";
import Profile from "../pages/client/Profile";

//admin pages
import AdminLogin from "../pages/admin/AdminLogin";
import AdminProfile from "../pages/admin/AdminProfile";
import Dashboard from "../pages/admin/Dashboard";
import CategoryManagement from "../pages/admin/CategoryManagement";
import MessagesManagement from "../pages/admin/MessagesManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import ProductManagement from "../pages/admin/ProductManagement";
import ReviewsManagement from "../pages/admin/ReviewsManagement";
import UserManagement from "../pages/admin/UserManagement";

//layouts
import AdminLayout from "../layouts/admin/AdminLayout";
import ClientLayout from "../layouts/client/ClientLayout";
import AuthLayout from "../layouts/auth/AuthLayout";

import type { RouteObject } from "react-router-dom";
import VerifyEmail from "../pages/client/VerifyEmail";

//add protected route after user logic
const ROUTES: RouteObject[] = [
  //client layout
  {
    element: <ClientLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "email-verified",
        element: <VerifyEmail />,
      },
    ],
  },
  //auth layout
  {
    element: <AuthLayout />,
    path: "/auth/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login/admin",
        element: <AdminLogin />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  //admin layout
  {
    element: <AdminLayout />,
    path: "/admin/",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "orders",
        element: <OrderManagement />,
      },
      {
        path: "categories",
        element: <CategoryManagement />,
      },
      {
        path: "reviews",
        element: <ReviewsManagement />,
      },
      {
        path: "messages",
        element: <MessagesManagement />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
];

export default ROUTES;
