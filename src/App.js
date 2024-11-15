import logo from "./logo.svg";
import "./App.css";
import Appbar from "../src/components/Appbar/index";
import { PromotionalProvider } from "./context/promocontext";
import HeaderPr from "./pages/Promotion/headerPr";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";
import ForgotPw from "./pages/ForgorPw";
import ProductDetails from "./pages/ProductDetails"; 

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
          <Route path="/productdetails" element={<ProductDetails product={sampleProduct} />} />
        </Routes>
      </BrowserRouter>
    </PromotionalProvider>
  );
}

export default App;
