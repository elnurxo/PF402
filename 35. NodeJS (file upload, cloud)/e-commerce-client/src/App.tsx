import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
