import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";
import { SnackbarProvider } from "notistack";
const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
