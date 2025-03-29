import { RouterProvider, createBrowserRouter } from "react-router";
import ROUTES from "./routes";
import AuthProvider from "./services/context/AuthContext";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
