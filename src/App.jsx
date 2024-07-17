import Navbar from "./components/common/Navbar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import SingleCard from "./components/sinlgeProduct/SingleCard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:id" element={<SingleCard />} />
      </Routes>
    </div>
  );
}

export default App;
