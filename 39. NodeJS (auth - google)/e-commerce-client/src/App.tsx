import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";
import { SnackbarProvider } from "notistack";
const router = createBrowserRouter(ROUTES);
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
