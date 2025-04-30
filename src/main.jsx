import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom"; // <-- small fix: react-router-dom
import { OrderProvider } from './sections/Order/OrderContext.jsx';
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ HelmetProvider added */}
      <BrowserRouter>
        <OrderProvider> {/* ✅ OrderProvider stays same */}
          <App />
        </OrderProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);