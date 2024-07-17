import Navbar from "./components/common/Navbar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import SingleCard from "./components/sinlgeProduct/SingleCard";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/:id"
          element={<SingleCard cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
