import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import { NoPage } from "./pages/nopage/NoPage";
import { Order } from "./pages/order/Order";
import MyState from "./context/myState";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Cart from "./pages/cart/Cart";
import AddProduct from "./pages/admin/add-product/AddProduct";
import UpdateProduct from "./pages/admin/update-product/UpdateProduct";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
