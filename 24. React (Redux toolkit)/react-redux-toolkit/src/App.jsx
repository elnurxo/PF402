import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Basket from "./pages/Basket.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("basket"))) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
  }, []);
  return (
    <>
      <SnackbarProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SnackbarProvider>
    </>
  );
}

export default App;
