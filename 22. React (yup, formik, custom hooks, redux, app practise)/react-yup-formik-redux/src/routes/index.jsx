//ADMIN-CLIENT LAYOUTS
import AdminLayout from "../layout/admin";
import ClientLayout from "../layout/client";

//client pages
import CarDetail from "../pages/client/CarDetail";
import Cars from "../pages/client/Cars";
import Home from "../pages/client/Home";
import Register from "../pages/client/Register";
import User from "../pages/client/User";

//common
import Login from "../pages/common/Login";
import NotFound from "../pages/common/NotFound";

//admin pages
import Dashboard from "../pages/admin/Dashboard";
import CarManagement from "../pages/admin/CarManagement";
import RentalManagement from "../pages/admin/RentalManagement";
import UserManagement from "../pages/admin/UserManagement";

const ROUTES = [
  //client routes
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "cars/:id",
        element: <CarDetail />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "cars",
        element: <CarManagement />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "rental",
        element: <RentalManagement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
