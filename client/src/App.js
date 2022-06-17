import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import SharedLayout from "./pages/SharedLayout";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
