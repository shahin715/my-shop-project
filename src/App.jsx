import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/banner";
import Hero from "./Components/Hero/hero";
import Products from "./Components/Product/products";
import TopProducts from "./Components/TopProduct/TopProducts";
import Popup from "./Components/Popup/Popup";
import Footer from "./Fotter/Fotter";
import Bestproduct from "./Components/BestProduct/Bestproduct";
import KidsWear from "./Components/Pages/kids-wear/kidswear";
import Womenwear from "./Components/Pages/Women-wear/womenwear";
import Womenallproduct from "./Components/Pages/Women-wear/womenallproduct"
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
        <Route path="/kids-wear" element={<KidsWear />} />
        <Route path="/womens-wear" element={<Womenwear />} />
        <Route path="/womenallproduct" element={<Womenallproduct />} />
      </Routes>

      <Popup />
      <Footer />
    </div>
  );
};

export default App;




