import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./sections/Navbar/Navbar";
import Banner from "./sections/Banner/banner";
import Hero from "./sections/Hero/hero";
import Products from "./sections/Product/products";
import TopProducts from "./sections/TopProduct/TopProducts";
import Popup from "./sections/Popup/Popup";
import Footer from "./sections/Fotter/Fotter";
import Bestproduct from "./sections/BestProduct/Bestproduct";
import Womenwear from "./sections/Pages/Women-wear/womenwear";
import Womenallproduct from "./sections/Pages/Women-wear/womenallproduct"
import ElectronicsProductList from "./sections/Pages/Electronics/ElectronicsProductList";
import KidsWearProductList from "./sections/Pages/kids-wear/kidswear";

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
        <Route path="/kids-wear" element={<KidsWearProductList />} />
        <Route path="/womens-wear" element={<Womenwear />} />
        <Route path="/womenallproduct" element={<Womenallproduct />} />
        <Route path="/ElectronicsProductList" element={<ElectronicsProductList />} />
       
      </Routes>

      <Popup />
      <Footer />
    </div>
  );
};

export default App;




