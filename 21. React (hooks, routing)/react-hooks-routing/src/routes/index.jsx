import Home from "../pages/Client/Home";
import About from "../pages/Client/About";
import Contact from "../pages/Client/Contact";
import ClientLayout from "../pages/Client";
import NotFound from "../pages/Client/NotFound";
import Dashboard from "../pages/Admin/Dashboard";
import AddMovie from "../pages/Admin/AddMovie";
import AdminLayout from "../pages/Admin";
import Movies from "../pages/Client/Movies";
import MovieDetail from "../pages/Client/MovieDetail";
import AdminLogin from "../pages/Admin/Login";
import ProtectedRouted from "../components/ProtectedRoute";

const ROUTER = [
  // client panel
  {
    path: "/",
    element: <ClientLayout />,
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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: ":id",
            element: <MovieDetail />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // admin panel
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRouted>
            <Dashboard />
          </ProtectedRouted>
        ),
      },
      {
        path: "add-movie",
        element: (
          <ProtectedRouted>
            <AddMovie />
          </ProtectedRouted>
        ),
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTER;
