import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PromotionalProvider } from "./context/promocontext";
import AboutPage from "./pages/About";
import AdminLayout from "./pages/AdminLayout";
import Cart from "./pages/Cart";
import ContactPage from "./pages/ContactPage";
import DashboardLayout from "./pages/DashboardLayout";
import Delivery from "./pages/Delivery";
import ForgotPw from "./pages/ForgorPw";
import HomePage from "./pages/Home";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Sells from "./pages/Sells";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StockAndInventory from "./pages/StockAndInventory";
import Vouchers from "./pages/Vouchers";

function App() {
  const isLoggedIn = true;

  function App() {
    // Sample product data for testing
    const sampleProduct = {
      imageUrl: "https://example.com/product-image.jpg",
      name: "Sample Product",
      price: "25000",
      description: "This is a sample product description.",
    };

    return (
      <PromotionalProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/forgotpw" element={<ForgotPw />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/productdetails"
              element={<ProductDetails product={sampleProduct} />}
            />

            {/* Admin Routes */}
            {isLoggedIn && (
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<DashboardLayout />} />
                <Route
                  path="stocks-and-inventory"
                  element={<StockAndInventory />}
                />
                <Route path="vouchers" element={<Vouchers />} />
                <Route path="sells" element={<Sells />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            )}
          </Routes>
        </BrowserRouter>
      </PromotionalProvider>
    );
  }
}

export default App;
