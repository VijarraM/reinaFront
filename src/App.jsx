import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Marcaciones from "./pages/Marcaciones";
import Products from "./pages/Products";
import Outflows from "./pages/Outflows";
import Incomes from "./pages/Incomes";
import Orders from "./pages/Orders";
import Close from "./pages/close";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marcaciones" element={<Marcaciones />} />
        <Route path="/products" element={<Products />} />
        <Route path="/outflows" element={<Outflows />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/close" element={<Close />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
