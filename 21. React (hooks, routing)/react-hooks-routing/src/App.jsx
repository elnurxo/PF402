import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTER from "./routes";
import AuthProvider from "./services/context/AuthContext.jsx";
const router = createBrowserRouter(ROUTER);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
