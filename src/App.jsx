import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./sections/Navbar/Navbar";
import Signup from "./sections/Navbar/Signup";
import Login from "./sections/Navbar/Login";
import Banner from "./sections/Banner/banner";
import Hero from "./sections/Hero/hero";
import Products from "./sections/Product/products";
import ProductDetail from "./sections/Product/ProductDetail";
import TopProducts from "./sections/TopProduct/TopProducts";
import Popup from "./sections/Popup/Popup";
import Footer from "./sections/Fotter/Fotter";
import Bestproduct from "./sections/BestProduct/Bestproduct";
import Womenwear from "./sections/comPages/Women-wear/womenwear";
import Womenallproduct from "./sections/comPages/Women-wear/womenallproduct";
import WomenwearProductDetail from "./sections/comPages/Women-wear/WomenProductDetail";
import ProductDetails from "./sections/comPages/Women-wear/ProductDetails"
import ElectronicsProductList from "./sections/comPages/Electronics/ElectronicsProductList";
import ElectronicProductDetail from "./sections/comPages/Electronics/ElectronicsProductListDetails";
import KidsWearProductList from "./sections/comPages/kids-wear/KidsWear";
import KidsProductDetail from "./sections/comPages/kids-wear/KidsProductDetail";
import Order from "./sections/Order/order";
import Checkout from "./sections/Order/Checkout";
import ThankYou from "./sections/Order/ThankYou";
import TopProductDetail from "./sections/TopProduct/TopProductDetail";
import MensWear from "./sections/comPages/mens-wear/MensWear";
import MensWearDetail from "./sections/comPages/mens-wear/MensWearDetail";
import { AuthProvider } from "./sections/Navbar/AuthProvider"; 
import NotFound from "./sections/Navbar/NotFound"; 
import NoFound from "./sections/Navbar/noFound"

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <AuthProvider> {/* ✅ Wrap your whole app inside AuthProvider */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Bestproduct />
              </>
            }
          />
          <Route path="/orders" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kids-wear" element={<KidsWearProductList />} />
          <Route path="/kids/:id" element={<KidsProductDetail />} />
          <Route path="/womens-wear" element={<Womenwear />} />
          <Route path="/womenallproduct" element={<Womenallproduct />} />
          <Route path="/womenwear/:id" element={<WomenwearProductDetail />} />
          <Route path="/womenwear/:id" component={<ProductDetails/>} /> 
          {/* <Route path="/womenwear/details/:id" element={<WomenAllProductDetails />} /> */}
          <Route path="/ElectronicsProductList" element={<ElectronicsProductList />} />
          <Route path="/electronics/:id" element={<ElectronicProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/topproduct/:id" element={<TopProductDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/menswear" element={<MensWear />} />
          <Route path="/menswear/:id" element={<MensWearDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/no" element={<NoFound/>} />
        </Routes>

        <Popup />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;








