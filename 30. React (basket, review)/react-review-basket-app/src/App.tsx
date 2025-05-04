import { Navbar } from "./layouts/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {/* footer */}
      </BrowserRouter>
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App;
